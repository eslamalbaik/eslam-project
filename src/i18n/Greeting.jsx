import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

function Greeting() {
    const { t, i18n } = useTranslation();
    const fontSizeClasses = classNames({
        'text-sm': i18n.language === 'en',
        'text-3xl': i18n.language === 'ar',
    });

    return (
        <div className={`${fontSizeClasses}`} dir={i18n.dir()}>
            {t('greeting')}
        </div>
    );
}

export default Greeting;
