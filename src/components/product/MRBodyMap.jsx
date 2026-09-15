export default function MRBodyMap({ service }) {
    const area = service.bodyArea;

    return (
        <div className="mr-body-map">
            <div className="mr-body-image-wrapper">

                <img
                    src="/assets/mr-body.jpg"
                    alt={`Kroppsöversikt – ${service.title}`}
                    className="mr-body-map-image"
                />

                {area && (
                    <div
                        className="mr-body-highlight"
                        style={{
                            left: `${area.x}%`,
                            top: `${area.y}%`,
                            width: `${area.width}%`,
                            height: `${area.height}%`,
                        }}
                        aria-hidden="true"
                    />
                )}

            </div>
        </div>
    );
}