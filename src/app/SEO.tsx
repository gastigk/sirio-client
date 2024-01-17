import Head from "next/head";

const SEO = ({ pageTitle, font }: { pageTitle: string, font: string }) => (
    <>
        <Head>
            <title>
                {pageTitle && `${pageTitle} || Casa Sirio - amuletos y talismanes}`}
            </title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="tienda digital de amuletos y talismanes" />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="Casa Sirio, Sirio, amuletos, talismanes, velas intencionadas, velas masajes, brumas" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            {/* <meta property="og:url" content="METATAG:url" /> reemplaza con la URL de tu sitio web */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content="Casa Sirio es una tienda de amuletos y talismanes." />
            <meta property="og:image" content="METATAG:image" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            {/* <meta property="twitter:url" content="METATAG:url" /> reemplaza la URL de la imagen que quieres usar para las tarjetas de Twitter y Open Graph */}
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content="Casa Sirio es una tienda de amuletos y talismanes." />
            <meta property="twitter:image" content="METATAG:image" />

            {font && <link href={font} rel="stylesheet" />}
            <link rel="icon" href="/favicon.png" />
        </Head>
    </>
);

export default SEO;