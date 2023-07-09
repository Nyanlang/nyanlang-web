import DocsTemplate from "@/components/docs-template";
import {H1, P, Lnk} from "@/components/docs-component";

export default function DocsIndex() {
    return <DocsTemplate title={"메인"}>
        <H1>냥랭에 대하여...</H1>
        <P>냥랭은 <Lnk href={"https://github.com/ritonis"}>서브</Lnk>에 의해서 2023년 2월 25일 만들어졌다냥.</P>
        <P>
            <Lnk href={"https://esolangs.org/wiki/Brainfuck"}>Brainfuck</Lnk> 언어를 기반으로 하여 약 한 시간만에 구상 및 구현되었으며,<br />
            이후 계속해서 발전시켜 왔다냥.
        </P>
        <P>
            냥랭은 세계에서 가장 귀여운 언어를 목표로 하고 있다냥. 때문에, 여러분의 도움이 필요하다냥.<br />
            만약 여러분이 냥랭의 발전을 돕고 싶다면 <Lnk href={"https://github.com/nyanlang/nyanlang"}>깃허브 레포지토리</Lnk>로 들어가서 냥랭의 발전에 도움을 줘라냥!
        </P>
        <P>
            아직 응애 언어인 만큼 냥랭은 매우 불안정하다냥.
        </P>
        <P>
            여러분의 이슈 제보와 풀 리퀘스트 하나 하나가 전부 큰 도움이 된다냥.
        </P>
        <P>
            혹은, <Lnk href={"https://toss.me/sserve"}>금전적인 도움</Lnk>을 줄 수도 있다냥. (설마.. 냥랭을 위해 돈을 내주겠다고냥..?)
        </P>
    </DocsTemplate>
}