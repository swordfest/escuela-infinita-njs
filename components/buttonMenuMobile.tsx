import { useRecoilState } from "recoil";
import { menuMobileOpen } from "./store";



export default function ButtonMenuMobile () {
	const [mobileMenuOpen, setMobileMenuOpen] = useRecoilState(menuMobileOpen);

    return (
        <button
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				title="toggle"
				type="button"
				className={("mobile-menu w-6 h-6 flex items-center justify-center xl:hidden ")}>
				<svg
					className={
						"icon-menu w-8 h-8 fill-[#303030] dark:fill-[#cfcfcf] " +
						(mobileMenuOpen && "hidden")
					}
					viewBox="0 0 24 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M3 18.667H21V16.667H3V18.667ZM3 13.667H21V11.667H3V13.667ZM3 6.66699V8.66699H21V6.66699H3Z" />
				</svg>
				<svg
					className={
						"icon-close w-8 h-8 fill-[#303030] dark:fill-[#cfcfcf] " +
						(!mobileMenuOpen && "hidden")
					}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" />
				</svg>
			</button>
    )
}