import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useOutsideClick } from "./functions";
import MenuNavbar from "./menu";
import MenuItem from "./menuItem";
import { menuMobileOpen } from "./store";

export default function MenuMobile(props: any) {
	return (
		<div
			className={
				"menu-mobile overflow-hidden w-full h-screen fixed top-20 z-[2] bg-white transition-all flex flex-col items-center gap-6 py-6 "
			}>
			<MenuNavbar isMobile={true} />
		</div>
	);
}
