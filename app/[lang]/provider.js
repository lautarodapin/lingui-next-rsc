// I18nProvider.ts
'use client'

import {setupI18n} from '@lingui/core'
import {I18nProvider as LinguiProvider} from '@lingui/react'



export function I18nProvider({locale, messages, ...props}) {
    return (
        <LinguiProvider
            i18n={setupI18n({
                locale: locale,
                messages: {[locale]: messages},
            })}
            {...props}
        />
    )
}
