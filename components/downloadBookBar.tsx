import ButtonDownload from "./buttonDownload";


export default function DownloadBookBar () {
    return (
        <div className="download-book w-full h-32 bg-gradient-to-b from-[#D9D6CC] to-[#FFFCF1] col-span-12 flex items-center justify-center text-white">
            <div className="container h-full mx-auto flex items-center justify-center gap-6 ">
            <ButtonDownload text={'DESCARGAR LIBRO - PDF'} type={'button'} link={'#'} />
            <ButtonDownload text={'DESCARGAR LIBRO - EPUB'} type={'button'} link={'#'} />
            <ButtonDownload text={'DESCARGAR LIBRO - PDF'} type={'menu'} link={'#'} />

            </div>
        </div>
    )
}