import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const ModalContent = (props) => {
    const [currentUrlIndex, setCurrentUrlIndex] = React.useState(0);
    const [currentPDFUrl, setCurrentPDFUrl] = React.useState("");

    const iframeRef = useRef();

    useEffect(() => {
        setCurrentPDFUrl(props.bookPDFLinkList[0]);
    });

    function handleNextBook(direction: string) {
        const { bookPDFLinkList } = props;

        if (direction === "next") {
            currentUrlIndex < bookPDFLinkList.length - 1 &&
                setCurrentUrlIndex(currentUrlIndex + 1);
        } else {
            currentUrlIndex !== 0 && setCurrentUrlIndex(currentUrlIndex - 1);
        }

        setCurrentPDFUrl(bookPDFLinkList[currentUrlIndex]);

        iframeRef.current.src = bookPDFLinkList[currentUrlIndex];
        // iframeRef.current && iframeRef.current.src =
        //     bookPDFLinkList[currentUrlIndex];
    }

    return (
        <>
            <div>
                <h1>Manual for Interior Souls</h1>
                <h3>by Father Jean Nicolas Grou</h3>
                {props.bookPDFLinkList.length > 1 && (
                    <div className="modal-navigate-controls-wrapper">
                        <button
                            onClick={() => handleNextBook("prev")}
                            disabled={currentUrlIndex === 0}
                        >
                            previous book
                        </button>
                        <button
                            onClick={() => handleNextBook("next")}
                            disabled={
                                currentUrlIndex ===
                                props.bookPDFLinkList.length - 1
                            }
                        >
                            next book
                        </button>
                    </div>
                )}
            </div>
            <button onClick={props.closeModal} className="modal-close-button">
                <span>&times;</span>
            </button>

            {/* <iframe
                className="modal-iframe"
                // type="text/html"
                // scrolling="no"
                // frameborder="0"
                // loading="lazy"
                // allowfullscreen="allowfullscreen"
                // allow="accelerometer; autoplay; encrypted-media; fullscreen *; gyroscope; picture-in-picture;"
                src="https://online.flippingbook.com/view/234164431?ncdr=true&amp;token=42vq0sfcvm2sgybhfnmgafyic3vi8m1s24e2h3do11s13e1nzf4zc7nz16bjme4uzxoda67jewk9txwzx4ckhftxjlyjavgb7ytnxl1yaecf6uo1phyf4g8b9xzapzdmc340ki2amlynklen4xb8p2ac6rzp2foh05rymbjt6ztjuif7sw25tib278kooa8srqafmsnfrimpnwo3lr4ct7ie3t627ry11bbb28xtq3279as&amp;noview=true&amp;embed=true&amp;embedId=ccc95dfe85"
                // title="Your demo flipbook"
                // style="width: 100%; height: 100%;"
            /> */}

            <iframe
                ref={iframeRef}
                src={currentPDFUrl}
                className="modal-iframe"
                allowFullScreen={true}
            />
        </>
    );
};

// FlipBooks .
// <a href="https://online.flippingbook.com/view/234164431/" class="fbo-embed" data-fbo-id="747c63b756" data-fbo-ratio="16:9" data-fbo-lightbox="yes" data-fbo-width="100%" data-fbo-height="auto" data-fbo-version="1" style="max-width: 100%">Your demo flipbook</a><script async defer src="https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=234164431"></script>
