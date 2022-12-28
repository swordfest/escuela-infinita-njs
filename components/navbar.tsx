import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Logo from "./logo";
import Menu from "./menu";
import MenuMobile from "./menuMobile";
import { menuMobileOpen } from "./store";
import { Transition, CSSTransition } from "react-transition-group";
import MenuItem from "./menuItem";
import { useOutsideClick } from "./functions";
import ButtonMenuMobile from "./buttonMenuMobile";

export default function Navbar(props: any) {
	// const [scrolled, setScrolled] = useState('h-24')
	const [scrolled, setScrolled] = useState("h-20 text-[14px]");
	const [scrolledLogo, setScrolledLogo] = useState(
		" origin-left scale-100 text-normal "
	);
	const [mobileMenuOpen, setMobileMenuOpen] = useRecoilState(menuMobileOpen);
	const nodeRef = useRef();

	useEffect(() => {
		let prevScrollpos = window.scrollY;
		window.onscroll = () => {
			let currentScrollpos = window.scrollY;
			// if (prevScrollpos > currentScrollpos || prevScrollpos == 0) {
			if (
				document.body.scrollTop > 80 ||
				document.documentElement.scrollTop > 80
			) {
				setScrolled("h-24 text-[14px]");
				// setScrolled('top-0')
				setScrolledLogo("origin-left scale-100 ");
			} else {
				setScrolled("h-20 text-[14px] bg-transparent");
				setScrolledLogo(" origin-left scale-[0.9]  ");
			}
			prevScrollpos = currentScrollpos;
			// if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			//     setScrolled('h-20')
			// } else {
			//     setScrolled('h-24')
			// }
		};
	});

	// const duration = 300;

	// const defaultStyle = {
	// 	transition: `opacity ${duration}ms ease-in-out`,
	// 	opacity: 0,
	// };

	// const transitionStyles = {
	// 	entering: { opacity: 1 },
	// 	entered: { opacity: 1 },
	// 	exiting: { opacity: 0 },
	// 	exited: { opacity: 0 },
	// };


	return (
		<>
			<nav
				className={
					"navbar fixed top-0 z-[2] w-full px-4 xl:px-0 bg-white shadow-lg transition-all " +
					scrolled
				}>
				<div className="nav-wrapper container 2xl:w-full h-full mx-auto bg-white  flex items-center justify-between ">
					<Logo width={scrolledLogo} />
					<Menu />
					<ButtonMenuMobile />
				</div>
			</nav>
			<CSSTransition
				nodeRef={nodeRef}
				in={mobileMenuOpen}
				timeout={100}
				classNames={{
					appear: 'opacity-0',
					// appearActive: 'my-active-appear',
					// appearDone: 'my-done-appear',
					enter: 'opacity-100 transition-all duration-300',
					// enterActive: 'opacity-100 transition-all duration-300',
					// enterDone: 'opacity-100 transition-all duration-300',
					exit: 'opacity-100 transition-all duration-300',
					// exitActive: 'opacity-0 scale-[0.9] transition-all duration-300',
					// exitDone: 'opacity-100 transition-all duration-300',
					}}
					unmountOnExit
					
				   >
				<MenuMobile />
				{/* <div className="menu-mobile w-full h-screen fixed top-0 z-[1] bg-white transition-all flex flex-col items-center gap-6 py-6" ref={nodeRef}>aaaa</div> */}
			</CSSTransition>
		</>
	);
}
