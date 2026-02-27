/**
 * DailyPB Blog List Page with Custom Hero Banner
 * Swizzled from @docusaurus/theme-classic to add custom hero section
 */
import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import styles from './styles.module.css';

function BlogListPageMetadata(props) {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>DailyPB Blog</h1>
        <p className={styles.heroSubtitle}>
          Tips, updates, and insights for pickleball organizers and players.
        </p>
      </div>
    </div>
  );
}

function BlogListPageContent(props) {
  const {metadata, items, sidebar} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  return (
    <Layout>
      <BlogListPageHero />
      <div className={clsx('container', styles.contentContainer)}>
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}>
            <BlogPostItems items={items} />
            <BlogListPaginator metadata={metadata} />
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
