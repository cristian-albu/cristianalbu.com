export const client_config = {
    hostname: process.env.NEXT_PUBLIC_HOSTNAME,
    hostnameRegex: process.env.NEXT_PUBLIC_HOSTNAME_REGEX as RegExp | undefined,
    mediaHostname: process.env.NEXT_PUBLIC_MEDIA_HOSTNAME,
    mediaHostnameRegex: process.env.NEXT_PUBLIC_MEDIA_HOSTNAME_REGEX as
        | RegExp
        | undefined,
    dbHost: process.env.DB_HOST,
};
