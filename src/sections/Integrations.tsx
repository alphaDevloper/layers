import FigmaIcon from "@/assets/images/figma-logo.svg";
import SlackIcon from "@/assets/images/slack-logo.svg";
import NotionIcon from "@/assets/images/notion-logo.svg";
import RelumeIcon from "@/assets/images/relume-logo.svg";
import FramerIcon from "@/assets/images/framer-logo.svg";
import GithubIcon from "@/assets/images/github-logo.svg";
// import Image from "next/image";
import Integrationcolumn from "@/components/Integrationcolumn";

const integrations = [
    {
        name: "Figma",
        icon: FigmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: NotionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: SlackIcon,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: RelumeIcon,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: FramerIcon,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: GithubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
];
export type IntegrationsType = typeof integrations;
export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <div className="flex justify-center">
                            <div className="inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase ">
                                ✦ Integrations
                            </div>
                        </div>
                        <h2 className="text-6xl font-medium mt-6">
                            Plays well with{" "}
                            <span className="text-lime-400">others</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg ">
                            Layers seemlessly connects with your favorite tools,
                            making it easy to plug into any workflow and
                            collaborate across platforms.
                        </p>
                    </div>
                    <div>
                        {" "}
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0))]">
                            <Integrationcolumn integrations={integrations} />
                            <Integrationcolumn
                                integrations={integrations.slice().reverse()}
                                reverse
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
