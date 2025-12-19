"use client";

import { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import TextBox from "@/components/Textbox";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";

interface ParallaxAboutProps {
    title: string;
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
    ariaLabel?: string;
    className?: string;
    textBoxClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    tagClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
    mediaClassName?: string;
}

const ParallaxAbout = ({
    title,
    description,
    tag,
    tagIcon,
    buttons,
    imageSrc,
    videoSrc,
    imageAlt,
    videoAriaLabel,
    ariaLabel = "About section",
    className = "",
    textBoxClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    mediaClassName = "",
}: ParallaxAboutProps) => {

    return (
        <section
            aria-label={ariaLabel}
            className={cls("relative z-0 w-full h-svh", className)}
            style={{
                clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
            }}
        >
            <div className="fixed inset-0 w-full h-full">
                <MediaContent
                    imageSrc={imageSrc}
                    videoSrc={videoSrc}
                    imageAlt={imageAlt}
                    videoAriaLabel={videoAriaLabel}
                    imageClassName={cls("w-full h-full object-cover rounded-none!", mediaClassName)}
                />
            </div>

            <div className="relative z-10 flex items-center justify-center h-full w-content-width md:w-45 mx-auto">
                <TextBox
                    title={title}
                    description={description}
                    tag={tag}
                    tagIcon={tagIcon}
                    buttons={buttons}
                    className={cls("flex flex-col gap-3 md:gap-1", textBoxClassName)}
                    titleClassName={cls("text-6xl font-medium text-balance", titleClassName)}
                    descriptionClassName={cls("text-base md:text-lg leading-[1.2]", descriptionClassName)}
                    tagClassName={cls("px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
                    buttonContainerClassName={cls("flex gap-4 mt-3", buttonContainerClassName)}
                    buttonClassName={buttonClassName}
                    buttonTextClassName={buttonTextClassName}
                    center={true}
                />
            </div>
        </section>
    );
};

ParallaxAbout.displayName = "ParallaxAbout";

export default memo(ParallaxAbout);
