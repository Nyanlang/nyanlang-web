import DocsTemplate from "@/components/docs-template";
import {H1, Lnk, P} from "@/components/docs-component";

export default function DocsDevEnvironment() {
    return <DocsTemplate title={"개발 환경 구축"}>
        <H1 id={"ide"}>IDE</H1>
        <P>냥랭은 초기 버전부터 Visual Studio Code의 확장 프로그램을 지원했다냥.</P>
        <P>때문에, Visual Studio Code를 쓰는 것을 강력하게 추천한다냥.</P>
        <P>물론, 다른 IDE를 써도 상관은 없다냥. 하지만 웬만하면 익숙하고 편한것이 좋지 않겠냥?</P>
        <P><Lnk href={"https://marketplace.visualstudio.com/items?itemName=ParkShinWoo.nyanlang-language"}>여기</Lnk>에서 VSCode용 냥랭 확장을 볼 수 있다냥.</P>
    </DocsTemplate>
}