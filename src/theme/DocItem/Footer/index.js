import React from 'react';
import OriginalDocItemFooter from '@theme-original/DocItem/Footer';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';

function RelatedArticles() {
  const { metadata } = useDoc();

  let category;
  try {
    category = useCurrentSidebarCategory();
  } catch {
    return null;
  }

  if (!category || !category.items) return null;

  const siblings = category.items
    .filter(item => item.type === 'link' && item.href !== metadata.permalink)
    .slice(0, 5);

  if (siblings.length === 0) return null;

  return (
    <div style={{
      marginTop: '2rem',
      padding: '1.25rem 1.5rem',
      background: '#F2F3F5',
      borderRadius: '10px',
      borderLeft: '3px solid #4AA3E7',
    }}>
      <p style={{
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 700,
        fontSize: '0.8rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#223960',
        margin: '0 0 0.75rem',
      }}>
        More in {category.label}
      </p>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {siblings.map(item => (
          <li key={item.href} style={{ margin: '0.3rem 0' }}>
            <Link
              to={item.href}
              style={{
                color: '#4AA3E7',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DocItemFooter(props) {
  return (
    <>
      <OriginalDocItemFooter {...props} />
      <RelatedArticles />
    </>
  );
}
