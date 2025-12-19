"use client";

import { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import TextBox from "@/components/Textbox";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";

interface MediaAboutProps {
    title: string;
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
    useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
    ariaLabel?: string;
    className?: string;
    textBoxClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    tagClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
}

const MediaAbout = ({
    title,
    description,
    tag,
    tagIcon,
    buttons,
    imageSrc,
    videoSrc,
    imageAlt,
    videoAriaLabel,
    useInvertedBackground,
    ariaLabel = "About section",
    className = "",
    textBoxClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
}: MediaAboutProps) => {

    return (
        <section
            aria-label={ariaLabel}
            className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
        >
            <div className={cls("relative w-content-width mx-auto aspect-square md:aspect-video rounded-theme-capped overflow-hidden", mediaWrapperClassName)}>
                <MediaContent
                    imageSrc={imageSrc}
                    videoSrc={videoSrc}
                    imageAlt={imageAlt}
                    videoAriaLabel={videoAriaLabel}
                    imageClassName={cls("w-full h-full object-cover", mediaClassName)}
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
                </div>
            </div>
        </section>
    );
};

MediaAbout.displayName = "MediaAbout";

export default memo(MediaAbout);
