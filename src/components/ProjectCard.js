import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import VanillaTilt from "vanilla-tilt";


function ProjectCard({ val }) {
    const projectCard = useRef(null);
    useEffect(() => {
        VanillaTilt.init(projectCard.current, {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            gyroscope: false,
        });
    }, [projectCard]);

    return (
        <a
            href={val.url}
            target="_blank"
            rel="noreferrer"
            style={{
                display: "contents",
                width: "100%",
                textDecoration: "none"
            }}
        >
            <div className="col-sm-6 m-15 px-tb py-3" ref={projectCard}>
                <div className="feature-box-01 media">
                    <Image
                        placeholder="blur"
                        src={`${val.image}`}
                        blurDataURL={val.blurImage || ""}
                        alt={val.name}
                        width={100}
                        height={100}
                        style={{
                            objectFit: 'contain !important',
                            left: 'unset !important',
                            right: '2rem !important',
                            bottom: 'unset !important',
                            position: "absolute",
                            top: 0,
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: '0px',
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            borderRadius: '0.75rem',
                            boxShadow: 'var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)',
                            // '&hover': {
                            //     transform: "scale(2)"
                            // }
                        }}
                    />
                    <div className="feature-content media-body">
                        <h5>{val.name}</h5>
                        <p style={{
                            fontWeight: 400,
                            fontSize: "1rem"
                        }}>
                            {val.description}
                        </p>
                        <div className="flex flex-row" style={{ display: "flex" }}>
                            {val?.tech?.map((el, i) => (
                                <img
                                    className={`${i % 2 === 0 && "ml-16"} mb-4 px-1`}
                                    src={`static/projects/tech/${el}.svg`}
                                    alt={el}
                                    height={45}
                                    width={45}
                                    key={el}
                                    title={el}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard