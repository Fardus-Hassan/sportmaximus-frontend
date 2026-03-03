import React from 'react';

type LayoutType = 'three-column' | 'two-column-left-large' | 'two-column-right-large';

interface PageLayoutProps {
  layout?: LayoutType;
  leftColumn?: React.ReactNode;
  middleColumn?: React.ReactNode;
  rightColumn?: React.ReactNode;
  stickyLeft?: boolean;
  stickyMiddle?: boolean;
  stickyRight?: boolean;
  stickyLeftHeight?: string;
  stickyMiddleHeight?: string;
  stickyRightHeight?: string;
  stickyTop?: string;
  hideScrollbar?: boolean;
  className?: string;
}

export default function PageLayout({
  layout = 'three-column',
  leftColumn,
  middleColumn,
  rightColumn,
  stickyLeft = false,
  stickyMiddle = false,
  stickyRight = false,
  stickyLeftHeight,
  stickyMiddleHeight,
  stickyRightHeight,
  stickyTop = '5rem',
  hideScrollbar = false,
  className = '',
}: PageLayoutProps) {
  const scrollbarClass = hideScrollbar ? 'hide-scrollbar' : '';
  
  const getStickyLeftStyle = (): React.CSSProperties => {
    if (!stickyLeft) return {};
    const style: React.CSSProperties = { position: 'sticky', top: stickyTop };
    if (stickyLeftHeight) {
      style.maxHeight = stickyLeftHeight;
      style.overflowY = 'auto';
    }
    return style;
  };
  
  const getStickyMiddleStyle = (): React.CSSProperties => {
    if (!stickyMiddle) return {};
    const style: React.CSSProperties = { position: 'sticky', top: stickyTop };
    if (stickyMiddleHeight) {
      style.maxHeight = stickyMiddleHeight;
      style.overflowY = 'auto';
    }
    return style;
  };
  
  const getStickyRightStyle = (): React.CSSProperties => {
    if (!stickyRight) return {};
    const style: React.CSSProperties = { position: 'sticky', top: stickyTop };
    if (stickyRightHeight) {
      style.maxHeight = stickyRightHeight;
      style.overflowY = 'auto';
    }
    return style;
  };

  // Three column layout: middle large, sides small and equal
  if (layout === 'three-column') {
    return (
      <div className={`mx-auto ${className}`}>
        <div className="flex flex-col md:flex-row gap-6 min-h-screen">
          {/* Left Column - visible on top for small, sticky aside on md+ */}
          {leftColumn && (
            <section className={`md:hidden ${stickyLeftHeight ? scrollbarClass : ''}`}>
              {leftColumn}
            </section>
          )}

          {/* Left Column - Hidden on small, visible on medium+ */}
          {leftColumn && (
            <aside
              className={`hidden md:block w-1/4 shrink-0 ${stickyLeft ? `self-start h-fit ${stickyLeftHeight ? scrollbarClass : ''}` : ''}`}
              style={getStickyLeftStyle()}
            >
              {leftColumn}
            </aside>
          )}

          {/* Middle Column - Full width on small, flex-1 on medium+ */}
          <main
            className={`w-full md:flex-1 ${stickyMiddle ? `self-start h-fit ${stickyMiddleHeight ? scrollbarClass : ''}` : ''}`}
            style={getStickyMiddleStyle()}
          >
            {middleColumn}
          </main>

          {/* Right Column - Hidden on small and medium, visible on large+ */}
          {rightColumn && (
            <aside
              className={`hidden lg:block w-1/4 shrink-0 ${stickyRight ? `self-start h-fit ${stickyRightHeight ? scrollbarClass : ''}` : ''}`}
              style={getStickyRightStyle()}
            >
              {rightColumn}
            </aside>
          )}
        </div>
      </div>
    );
  }

  // Two column layout: left large, right small
  if (layout === 'two-column-left-large') {
    return (
      <div className={`mx-auto ${className}`}>
        <div className="flex flex-col md:flex-row gap-6 min-h-screen">
          {/* Left Column - Large, full width on small */}
          <main
            className={`w-full md:flex-1 ${stickyLeft ? `self-start h-fit ${stickyLeftHeight ? scrollbarClass : ''}` : ''}`}
            style={getStickyLeftStyle()}
          >
            {leftColumn}
          </main>

          {/* Right Column - Small, hidden on small screens */}
          {rightColumn && (
            <aside 
              className={`hidden md:block w-1/4 shrink-0 ${stickyRight ? `self-start h-fit ${stickyRightHeight ? scrollbarClass : ''}` : ''}`}
              style={getStickyRightStyle()}
            >
              {rightColumn}
            </aside>
          )}
        </div>
      </div>
    );
  }

  // Two column layout: right large, left small
  if (layout === 'two-column-right-large') {
    return (
      <div className={`mx-auto ${className}`}>
        <div className="flex flex-col md:flex-row gap-6 min-h-screen">
          {/* Left Column - Small, hidden on small screens */}
          {leftColumn && (
            <aside
              className={`hidden md:block w-1/4 shrink-0 ${stickyLeft ? `self-start h-fit ${stickyLeftHeight ? scrollbarClass : ''}` : ''}`}
              style={getStickyLeftStyle()}
            >
              {leftColumn}
            </aside>
          )}

          {/* Right Column - Large, full width on small */}
          <main
            className={`w-full md:flex-1 ${stickyRight ? `self-start h-fit ${stickyRightHeight ? scrollbarClass : ''}` : ''}`}
            style={getStickyRightStyle()}
          >
            {rightColumn}
          </main>
        </div>
      </div>
    );
  }

  return null;
}
