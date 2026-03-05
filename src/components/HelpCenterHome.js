import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from '@docusaurus/Link';
import Fuse from 'fuse.js';

const CATEGORIES = [
  {
    emoji: '❓',
    title: 'Common Questions',
    accent: '#F97300',
    links: [
      { label: 'Sign In Help & Troubleshooting', href: '/help/common-questions/sign-in-help-troubleshooting' },
      { label: 'How can I find the Pay or Cancel button?', href: '/help/common-questions/how-can-i-find-the-pay-or-cancel-button' },
      { label: "Why isn't my Session showing up on the schedule?", href: '/help/common-questions/why-isnt-my-session-showing-up-on-the-main-schedu' },
    ],
  },
  {
    emoji: '🏓',
    title: 'Players',
    accent: '#4AA3E7',
    links: [
      { label: 'How to Pay (Automatic)', href: '/help/players/how-to-pay-for-a-session-automatic-payments' },
      { label: 'How to Pay (Manual)', href: '/help/players/how-to-pay-for-a-session-manual-payments' },
      { label: 'Adding Teammates', href: '/help/players/adding-teammates' },
      { label: 'How to Create a Team', href: '/help/players/how-to-create-a-team-and-add-yourself-to-a-session' },
      { label: 'How to Become a Free Agent', href: '/help/players/how-to-become-a-free-agent-for-a-session' },
      { label: 'Profile', href: '/help/players/profile' },
      { label: 'My Stuff (My Calendar)', href: '/help/players/my-stuff-my-calendar' },
      { label: 'Signup Notifications', href: '/help/players/signup-notifications' },
      { label: 'Session Tools', href: '/help/players/session-tools' },
      { label: 'Pickleball Etiquette', href: '/help/players/pickleball-etiquette' },
      { label: 'Location & Search Radius', href: '/help/players/location-and-search-radius' },
      { label: 'Viewing Game Score Results', href: '/help/players/viewing-game-score-results' },
    ],
  },
  {
    emoji: '👑',
    title: 'Hosts',
    accent: '#223960',
    links: [
      { label: 'Pro Features for Hosts', href: '/help/hosts/pro-features-for-hosts' },
      { label: 'Creating Open Play Events', href: '/help/hosts/creating-open-play-events' },
      { label: 'Team Events', href: '/help/hosts/team-events' },
      { label: 'Multiple Hosts', href: '/help/hosts/multiple-hosts-general-info' },
      { label: 'Player History', href: '/help/hosts/player-history' },
      { label: 'Email a User', href: '/help/hosts/email-a-user' },
    ],
  },
  {
    emoji: '💳',
    title: 'Payments',
    accent: '#15803D',
    links: [
      { label: 'Automatic Payments', href: '/help/payments/automatic-payments' },
      { label: 'Manual Payments', href: '/help/payments/manual-payments' },
      { label: 'Manual vs Automatic Comparison', href: '/help/payments/manual-vs-automatic-payment-comparison' },
      { label: 'General Payment FAQ', href: '/help/payments/general-payment-faq' },
      { label: 'How to Create a Direct Payment Link', href: '/help/payments/how-to-create-a-direct-payment-link' },
      { label: 'Refunds', href: '/help/payments/refunds' },
      { label: 'Disputes', href: '/help/payments/disputes' },
    ],
  },
  {
    emoji: '📅',
    title: 'Sessions',
    accent: '#4AA3E7',
    links: [
      { label: 'Creating Recurring Events', href: '/help/sessions/creating-recurring-events' },
      { label: 'Changing Time or Date', href: '/help/sessions/changing-the-time-or-date-of-a-session' },
      { label: 'Cancelling a Session', href: '/help/sessions/cancelling-a-session' },
      { label: 'Delete Sessions or Events', href: '/help/sessions/delete-sessions-or-events' },
      { label: 'Clone Event', href: '/help/sessions/clone-event' },
      { label: 'Updating All Future Session Times', href: '/help/sessions/updating-all-future-session-times' },
      { label: 'Skill Level / Rating Requirements', href: '/help/sessions/skill-level-rating-requirements' },
      { label: '2 & 24 Hr Reminders', href: '/help/sessions/2-24-hr-reminders' },
      { label: 'Email Templates', href: '/help/sessions/email-templates' },
      { label: 'Notification Settings', href: '/help/sessions/notification-settings' },
      { label: 'How to Change Event Image', href: '/help/sessions/how-to-change-event-image' },
      { label: 'Private / Draft Mode', href: '/help/sessions/can-i-make-an-event-private-or-draft-mode' },
      { label: 'Liability Waiver', href: '/help/sessions/liability-waiver' },
      { label: 'Custom Fields', href: '/help/sessions/custom-fields' },
      { label: 'Privacy Settings', href: '/help/sessions/privacy-settings' },
    ],
  },
  {
    emoji: '🎮',
    title: 'Session Apps',
    accent: '#F97300',
    links: [
      { label: 'Flex Play', href: '/help/session-apps/flex-play' },
      { label: 'Text Messaging', href: '/help/session-apps/text-messaging' },
      { label: 'DUPR Games', href: '/help/session-apps/dupr-games' },
      { label: 'Round Robin / Ladder App', href: '/help/session-apps/round-robin-ladder-app' },
      { label: 'Games Score Recording', href: '/help/session-apps/games-score-recording' },
      { label: 'The Wheel', href: '/help/session-apps/the-wheel' },
      { label: 'Randomizer', href: '/help/session-apps/randomizer' },
    ],
  },
  {
    emoji: '📋',
    title: 'Signups',
    accent: '#4AA3E7',
    links: [
      { label: 'Waitlists', href: '/help/signups/waitlists' },
      { label: 'Editing a Signup', href: '/help/signups/editing-a-signup' },
      { label: 'Adding a Guest', href: '/help/signups/adding-a-guest' },
      { label: 'Adding a User Manually', href: '/help/signups/adding-a-user-manually' },
      { label: 'Moving a Signup Between Sessions', href: '/help/signups/moving-a-signup-from-one-session-to-another' },
      { label: 'Roster of Signups', href: '/help/signups/roster-of-signups' },
      { label: 'Spreadsheet of Signups', href: '/help/signups/spreadsheet-of-signups' },
    ],
  },
  {
    emoji: '👥',
    title: 'Groups',
    accent: '#223960',
    links: [
      { label: 'Basic Group Info', href: '/help/groups/basic-group-info' },
      { label: 'Group Settings', href: '/help/groups/group-settings' },
      { label: 'Embedding a Group on a Webpage', href: '/help/groups/embedding-a-group-on-a-webpage' },
    ],
  },
  {
    emoji: '📣',
    title: 'Marketing',
    accent: '#17DB4E',
    links: [
      { label: 'How DailyPB Advertises Your Event', href: '/help/marketing/how-dailypb-advertises-your-event' },
      { label: 'Interest Lists', href: '/help/marketing/interest-lists' },
      { label: 'Direct Session Links', href: '/help/marketing/direct-session-links' },
      { label: 'Referral Program', href: '/help/marketing/referral-program' },
    ],
  },
  {
    emoji: '💬',
    title: 'Communication',
    accent: '#4AA3E7',
    links: [
      { label: 'Text Messaging', href: '/help/session-apps/text-messaging' },
      { label: 'Email a User', href: '/help/hosts/email-a-user' },
      { label: 'Email Templates', href: '/help/sessions/email-templates' },
      { label: 'Signup Notifications', href: '/help/players/signup-notifications' },
      { label: 'Notification Settings', href: '/help/sessions/notification-settings' },
    ],
  },
  {
    emoji: '📍',
    title: 'Venues',
    accent: '#F97300',
    links: [
      { label: 'Adding Aliases to Help Players Search', href: '/help/venues/adding-other-names-search-terms-or-aliases-to-ven' },
    ],
  },
  {
    emoji: '🤝',
    title: 'Contact Us',
    accent: '#17DB4E',
    links: [
      { label: 'Chat on WhatsApp (fastest)', href: 'https://wa.me/16198952588', external: true },
      { label: 'Email chuck@dailypb.com', href: 'mailto:chuck@dailypb.com', external: true },
    ],
  },
];

// Flat list used by Fuse — each entry knows which category it belongs to
const SEARCH_INDEX = CATEGORIES.flatMap((cat, catIdx) =>
  cat.links.map(link => ({ ...link, catTitle: cat.title, catIdx }))
);

function highlight(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: '#FFF176', borderRadius: 2, padding: '0 1px' }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function HelpCenterHome() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Hide sidebar/chrome and strip all container constraints so component fills full viewport width
  useEffect(() => {
    document.body.classList.add('help-center-home-active');

    // Hide chrome elements
    const toHide = [
      '.theme-doc-sidebar-container',
      '.pagination-nav',
      '.theme-doc-footer',
      '.theme-doc-breadcrumbs',
      'article > header',
    ].map(sel => document.querySelector(sel)).filter(Boolean);
    toHide.forEach(el => { el.style.display = 'none'; });

    // Walk up from <article> to <main>, stripping every container's padding and max-width
    // so our wrapper div can be truly full-width with no clipping from overflow:hidden ancestors
    const article = document.querySelector('article');
    const stripped = [];
    if (article) {
      article.style.cssText += ';padding:0!important;margin:0!important;max-width:none!important;';
      let el = article.parentElement;
      while (el) {
        stripped.push({ el, cssText: el.style.cssText });
        el.style.cssText += ';max-width:none!important;padding:0!important;margin:0!important;width:100%!important;overflow:visible!important;';
        if (el.tagName === 'MAIN') break;
        el = el.parentElement;
      }
    }

    return () => {
      document.body.classList.remove('help-center-home-active');
      toHide.forEach(el => { el.style.display = ''; });
      if (article) article.style.cssText = article.style.cssText.replace(/;padding:0!important;margin:0!important;max-width:none!important;/g, '');
      stripped.forEach(({ el, cssText }) => { el.style.cssText = cssText; });
    };
  }, []);

  const q = query.trim();

  const fuse = useMemo(() => new Fuse(SEARCH_INDEX, {
    keys: ['label', 'catTitle'],
    threshold: 0.4,      // 0 = exact only, 1 = match anything; 0.4 handles typos well
    minMatchCharLength: 2,
    ignoreLocation: true, // don't penalise matches at the end of a string
  }), []);

  const filtered = useMemo(() => {
    if (!q) return CATEGORIES.map(cat => ({ ...cat, show: true, matchedLinks: cat.links }));

    const results = fuse.search(q);
    if (results.length === 0) return [];

    // Group matched links back into their categories
    const byCategory = {};
    results.forEach(({ item }) => {
      if (!byCategory[item.catIdx]) byCategory[item.catIdx] = [];
      byCategory[item.catIdx].push(item);
    });

    return CATEGORIES
      .map((cat, idx) => ({ ...cat, show: !!byCategory[idx], matchedLinks: byCategory[idx] || [] }))
      .filter(c => c.show);
  }, [q, fuse]);

  return (
    <div style={styles.wrapper}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div style={styles.hero}>
        <div style={styles.heroInner}>
          <h1 style={styles.heroTitle}>How can we help you?</h1>
          <p style={styles.heroSub}>
            Search the DailyPB Help Center or browse by category below.
          </p>

          {/* Search bar */}
          <div style={styles.searchWrap}>
            <span style={styles.searchIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search help articles…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={styles.searchInput}
              aria-label="Search help articles"
            />
            {query && (
              <button onClick={() => setQuery('')} style={styles.clearBtn} aria-label="Clear search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>

          {/* WhatsApp CTA */}
          <a href="https://wa.me/16198952588" target="_blank" rel="noopener noreferrer" style={styles.whatsapp}>
            <span style={styles.whatsappIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </span>
            <span>Need help right away? Message me on WhatsApp — I usually respond in seconds.</span>
            <span style={styles.whatsappArrow}>→</span>
          </a>
        </div>
      </div>

      {/* ── Card Grid ────────────────────────────────────── */}
      <div style={styles.gridSection}>
        <div style={styles.gridInner}>
          {query && filtered.length === 0 && (
            <div style={styles.noResults}>
              <span style={{ fontSize: '2.5rem' }}>🔍</span>
              <p>No results for <strong>"{query}"</strong></p>
              <button onClick={() => setQuery('')} style={styles.resetBtn}>Clear search</button>
            </div>
          )}

          {query && filtered.length > 0 && (
            <p style={styles.resultsCount}>
              {filtered.reduce((n, c) => n + c.matchedLinks.length, 0)} result{filtered.reduce((n, c) => n + c.matchedLinks.length, 0) !== 1 ? 's' : ''} for <strong>"{query}"</strong>
            </p>
          )}

          <div style={styles.grid}>
            {filtered.map(cat => (
              <div key={cat.title} style={{ ...styles.card, '--accent': cat.accent }}>
                <div style={styles.cardHeader}>
                  <span style={{ ...styles.emojiPill, background: cat.accent + '18', color: cat.accent }}>
                    {cat.emoji}
                  </span>
                  <h2 style={{ ...styles.cardTitle, color: '#223960' }}>{cat.title}</h2>
                </div>
                <div style={{ ...styles.cardDivider, background: cat.accent }} />
                <ul style={styles.linkList}>
                  {cat.matchedLinks.map(link => (
                    <li key={link.href} style={styles.linkItem}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" style={styles.link}>
                          <span style={{ ...styles.linkDot, background: cat.accent }} />
                          {highlight(link.label, query)}
                          <span style={styles.extIcon}>↗</span>
                        </a>
                      ) : (
                        <Link to={link.href} style={styles.link}>
                          <span style={{ ...styles.linkDot, background: cat.accent }} />
                          {highlight(link.label, query)}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Inline styles ─────────────────────────────────────────────────────────────
const styles = {
  wrapper: {
    fontFamily: "'Roboto', sans-serif",
    width: '100%',
    margin: 0,
  },

  // Hero
  hero: {
    background: 'linear-gradient(135deg, #223960 0%, #1a2d4f 60%, #0f1d35 100%)',
    padding: '64px 24px 72px',
    position: 'relative',
    overflow: 'hidden',
  },
  heroInner: {
    maxWidth: 720,
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  logo: {
    height: 52,
    marginBottom: 24,
    objectFit: 'contain',
  },
  heroTitle: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 800,
    color: '#fff',
    margin: '0 0 12px',
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
  },
  heroSub: {
    fontSize: '1.1rem',
    color: 'rgba(255,255,255,0.7)',
    margin: '0 0 32px',
    fontWeight: 400,
  },

  // Search
  searchWrap: {
    position: 'relative',
    maxWidth: 560,
    margin: '0 auto 28px',
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    color: '#94a3b8',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  searchInput: {
    width: '100%',
    padding: '14px 48px 14px 48px',
    fontSize: '1rem',
    border: '2px solid transparent',
    borderRadius: 12,
    background: '#fff',
    boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
    outline: 'none',
    fontFamily: "'Roboto', sans-serif",
    color: '#223960',
    transition: 'border-color 0.2s',
  },
  clearBtn: {
    position: 'absolute',
    right: 14,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#94a3b8',
    display: 'flex',
    alignItems: 'center',
    padding: 4,
    borderRadius: 4,
  },

  // WhatsApp CTA
  whatsapp: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    background: 'rgba(23,219,78,0.15)',
    border: '1px solid rgba(23,219,78,0.35)',
    borderRadius: 10,
    padding: '11px 18px',
    color: '#86efac',
    textDecoration: 'none',
    fontSize: '0.88rem',
    fontWeight: 500,
    transition: 'background 0.2s',
    maxWidth: 520,
    margin: '0 auto',
  },
  whatsappIcon: {
    flexShrink: 0,
    color: '#17DB4E',
  },
  whatsappArrow: {
    marginLeft: 'auto',
    paddingLeft: 8,
    flexShrink: 0,
    opacity: 0.7,
  },

  // Grid section
  gridSection: {
    background: '#F2F3F5',
    padding: '48px 24px 64px',
  },
  gridInner: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: 20,
  },

  // Cards
  card: {
    background: '#fff',
    borderRadius: 14,
    padding: '24px 24px 20px',
    boxShadow: '0 1px 4px rgba(34,57,96,0.07)',
    transition: 'box-shadow 0.2s, transform 0.2s',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  emojiPill: {
    width: 42,
    height: 42,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    flexShrink: 0,
  },
  cardTitle: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '1.05rem',
    fontWeight: 700,
    margin: 0,
    letterSpacing: '-0.01em',
  },
  cardDivider: {
    height: 2,
    borderRadius: 2,
    marginBottom: 14,
    opacity: 0.6,
  },

  // Links
  linkList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  linkItem: {
    margin: 0,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '5px 6px',
    borderRadius: 6,
    color: '#374151',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 450,
    transition: 'background 0.15s, color 0.15s',
  },
  linkDot: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    flexShrink: 0,
    opacity: 0.7,
  },
  extIcon: {
    marginLeft: 'auto',
    fontSize: '0.75rem',
    opacity: 0.5,
  },

  // Search states
  noResults: {
    textAlign: 'center',
    padding: '64px 0',
    color: '#6b7280',
  },
  resultsCount: {
    color: '#6b7280',
    fontSize: '0.9rem',
    marginBottom: 20,
  },
  resetBtn: {
    marginTop: 12,
    background: '#223960',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    padding: '8px 20px',
    cursor: 'pointer',
    fontFamily: "'Roboto', sans-serif",
    fontSize: '0.9rem',
  },
};
