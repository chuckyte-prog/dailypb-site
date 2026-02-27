#!/usr/bin/env python3
"""
Reorganize DailyPB docs into category subdirectories,
update all internal links to absolute paths.
"""

import os
import re
import json
import shutil

DOCS_DIR = r"C:\Users\chuck\dailypb-site\docs"

# category-name -> (position, label, [slugs])
FILE_CATEGORIES = {
    "common-questions": (1, "Common Questions", [
        "sign-in-help-troubleshooting",
        "how-can-i-find-the-pay-or-cancel-button",
        "why-isnt-my-session-showing-up-on-the-main-schedu",
        "non-dailypb-resources",
    ]),
    "players": (2, "Players", [
        "how-to-pay-for-a-session-automatic-payments",
        "how-to-pay-for-a-session-manual-payments",
        "adding-teammates",
        "how-to-create-a-team-and-add-yourself-to-a-session",
        "how-to-become-a-free-agent-for-a-session",
        "profile",
        "my-stuff-my-calendar",
        "signup-notifications",
        "session-tools",
        "pickleball-etiquette",
        "location-and-search-radius",
        "viewing-game-score-results",
    ]),
    "hosts": (3, "Hosts", [
        "pro-features-for-hosts",
        "creating-open-play-events",
        "team-events",
        "multiple-hosts-general-info",
        "player-history",
        "email-a-user",
    ]),
    "payments": (4, "Payments", [
        "automatic-payments",
        "manual-payments",
        "manual-vs-automatic-payment-comparison",
        "general-payment-faq",
        "how-to-create-a-direct-payment-link",
        "refunds",
        "disputes",
        "how-to-add-alternative-payment-methods-to-an-event",
    ]),
    "sessions": (5, "Sessions", [
        "creating-recurring-events",
        "changing-the-time-or-date-of-a-session",
        "cancelling-a-session",
        "delete-sessions-or-events",
        "clone-event",
        "updating-all-future-session-times",
        "skill-level-rating-requirements",
        "2-24-hr-reminders",
        "email-templates",
        "notification-settings",
        "how-to-change-event-image",
        "can-i-make-an-event-private-or-draft-mode",
        "liability-waiver",
        "custom-fields",
        "privacy-settings",
    ]),
    "session-apps": (6, "Session Apps", [
        "flex-play",
        "flex-play-overview",
        "text-messaging",
        "dupr-games",
        "round-robin-ladder-app",
        "games-score-recording",
        "the-wheel",
        "randomizer",
    ]),
    "signups": (7, "Signups", [
        "waitlists",
        "editing-a-signup",
        "adding-a-guest",
        "adding-a-user-manually",
        "moving-a-signup-from-one-session-to-another",
        "roster-of-signups",
        "spreadsheet-of-signups",
    ]),
    "groups": (8, "Groups", [
        "basic-group-info",
        "group-settings",
        "embedding-a-group-on-a-webpage",
    ]),
    "marketing": (9, "Marketing", [
        "how-dailypb-advertises-your-event",
        "interest-lists",
        "direct-session-links",
        "referral-program",
    ]),
    "venues": (10, "Venues", [
        "adding-other-names-search-terms-or-aliases-to-ven",
    ]),
}

# Build reverse map: slug -> category
SLUG_TO_CATEGORY = {}
for cat, (pos, label, slugs) in FILE_CATEGORIES.items():
    for slug in slugs:
        SLUG_TO_CATEGORY[slug] = cat


def create_category_dirs():
    """Create category subdirectories and _category_.json files."""
    for cat, (pos, label, slugs) in FILE_CATEGORIES.items():
        cat_dir = os.path.join(DOCS_DIR, cat)
        os.makedirs(cat_dir, exist_ok=True)
        cat_json = {
            "label": label,
            "position": pos,
            "collapsible": True,
            "collapsed": True,
        }
        json_path = os.path.join(cat_dir, "_category_.json")
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(cat_json, f, indent=2)
        print(f"  Created category dir: {cat}/ (position {pos})")


def move_files():
    """Move each .md file to its category subdirectory."""
    moved = 0
    skipped = []
    for cat, (pos, label, slugs) in FILE_CATEGORIES.items():
        cat_dir = os.path.join(DOCS_DIR, cat)
        for slug in slugs:
            src = os.path.join(DOCS_DIR, f"{slug}.md")
            dst = os.path.join(cat_dir, f"{slug}.md")
            if os.path.exists(src):
                shutil.move(src, dst)
                moved += 1
                print(f"  Moved: {slug}.md -> {cat}/")
            elif os.path.exists(dst):
                print(f"  Already in place: {cat}/{slug}.md")
                moved += 1
            else:
                skipped.append(slug)
                print(f"  WARNING: Not found: {slug}.md")
    return moved, skipped


def update_links_in_file(filepath):
    """Update relative links in a markdown file to absolute /docs/category/slug paths."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    original = content
    updates = 0

    # Pattern 1: [text](./slug) or [text](./slug#anchor)
    def replace_relative_dotslash(m):
        nonlocal updates
        text = m.group(1)
        slug = m.group(2)
        anchor = m.group(3) or ""
        if slug in SLUG_TO_CATEGORY:
            cat = SLUG_TO_CATEGORY[slug]
            updates += 1
            return f"[{text}](/docs/{cat}/{slug}{anchor})"
        return m.group(0)

    content = re.sub(
        r'\[([^\]]+)\]\(\./([A-Za-z0-9_-]+)(#[^\)]+)?\)',
        replace_relative_dotslash,
        content
    )

    # Pattern 2: [text](slug) or [text](slug#anchor) — bare slug links (no ./ prefix, no http)
    def replace_bare_slug(m):
        nonlocal updates
        text = m.group(1)
        slug = m.group(2)
        anchor = m.group(3) or ""
        if slug in SLUG_TO_CATEGORY:
            cat = SLUG_TO_CATEGORY[slug]
            updates += 1
            return f"[{text}](/docs/{cat}/{slug}{anchor})"
        return m.group(0)

    content = re.sub(
        r'\[([^\]]+)\]\((?!http|/)([A-Za-z0-9_-]+)(#[^\)]+)?\)',
        replace_bare_slug,
        content
    )

    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

    return updates


def update_all_links():
    """Walk all moved files and update their links."""
    total_updates = 0
    files_updated = 0

    for cat in FILE_CATEGORIES:
        cat_dir = os.path.join(DOCS_DIR, cat)
        for fname in os.listdir(cat_dir):
            if fname.endswith(".md"):
                fpath = os.path.join(cat_dir, fname)
                n = update_links_in_file(fpath)
                if n > 0:
                    total_updates += n
                    files_updated += 1
                    print(f"  Updated {n} link(s) in {cat}/{fname}")

    return total_updates, files_updated


def main():
    print("\n=== Phase 1: Creating category directories ===")
    create_category_dirs()

    print("\n=== Phase 2: Moving files ===")
    moved, skipped = move_files()

    print("\n=== Phase 3: Updating internal links ===")
    total_links, files_updated = update_all_links()

    print("\n=== Summary ===")
    print(f"  Files moved:        {moved}")
    print(f"  Files not found:    {len(skipped)}")
    if skipped:
        print(f"  Missing slugs:      {', '.join(skipped)}")
    print(f"  Links updated:      {total_links} across {files_updated} file(s)")
    print("\nDone.")


if __name__ == "__main__":
    main()
