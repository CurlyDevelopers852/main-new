
export enum Platform {
    facebook="facebook",
    twitter="twitter",
    instagram="instagram",
    linkedin="linkedin",
    website="website",
    email="email"
}

export interface UserProps {
    name: string;
    img: string;
    position: string;
    desc: string;
    social: {
        platform: Platform;
        link: string;
      }[];
    bgcolor: string;
}

export interface SocialCardProps {
    user: UserProps;
    bgcolor?: string;
}

export type SocialIcon = {
    icon: JSX.Element;
    baseurl: string;
    colorCode: string;
};

export type SocialIconMap = {
    [key in Platform]: SocialIcon;
};

