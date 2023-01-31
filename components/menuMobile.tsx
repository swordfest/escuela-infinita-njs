import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useOutsideClick } from "./functions";
import Menu from "./menu";
import MenuItem from "./menuItem";
import { menuMobileOpen } from "./store";

export default function MenuMobile(props: any) {
	return (
		<div
			className={
				"menu-mobile overflow-hidden w-full h-screen fixed z-[2] bg-[#fffcf1] transition-all flex flex-col items-center justify-center gap-4 "
			}>
			<Menu isMobile={true} />
		</div>
	);
}
