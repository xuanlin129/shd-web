import React from 'react';
import { Helmet } from 'react-helmet-async';

function PageWithHelmet({ title, children }) {
  const fullTitle = title === '首頁' ? 'Xuan Lin' : `${title} - Xuan Lin`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      {children}
    </>
  );
}

export default PageWithHelmet;
