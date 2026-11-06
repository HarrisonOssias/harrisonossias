/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** Contact form API (output of infra/contact-form.yml). Unset falls back to mailto. */
    readonly VITE_CONTACT_ENDPOINT?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
