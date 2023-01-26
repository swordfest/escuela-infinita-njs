import { useRecoilState } from "recoil";
import CursosSection from "../components/cursosSection";
import { cursosList } from "../components/store";

export default function Testing() {
	const [cursos, setCursos] = useRecoilState(cursosList);

	return (
		<>
			<CursosSection lista={cursos} />
		</>
	);
}
