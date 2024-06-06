import React from 'react';
import { useTranslation } from 'react-i18next';
import './logo.less';

export default function Logo() {
  const { t } = useTranslation();

  return <div className="logo">{t('logoText')}</div>;
}
