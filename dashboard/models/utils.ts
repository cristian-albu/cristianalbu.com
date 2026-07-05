import { client_config } from "@/config/client_config";

export const urlMediaValidationConfig = {
    hostname: client_config.mediaHostnameRegex,
    protocol: /^https?$/,
};
