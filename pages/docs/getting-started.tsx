import DocsTemplate from "@/components/docs-template";
import {H1, P, InCode, Bold, OutCode} from "@/components/docs-component";

export default function DocsGettingStarted() {
    return <DocsTemplate title={"냥랭 시작하기"}>
        <H1 id={"installation"}>냥랭 설치</H1>
        <P>냥랭은 <Bold>pip</Bold>를 통해 간편하게 할 수 있다냥.</P>
        <P>쉘, CMD 혹은 Powershell에 다음과 같이 입력해서 바로 설치하면 된다냥.</P>
        <OutCode>
            $ pip install nyanlang
        </OutCode>
        <P>
            냥랭은 Zero-Dependency이기 때문에, 종속된 패키지는 없다냥.<br />
            다만, 냥랭은 match-case문(python 3.10 추가) 기능을 사용하고 있기 때문에 반드시 파이썬 3.10을 사용해 설치하고 사용해야 한다냥.
        </P>
        <H1 id={"how-to-run"}>실행</H1>
        <P>냥랭을 pip로 설치했다면, 준비된 실행 프로그램 또한 같이 설치된다냥.<br/>냥랭을 실행하고 싶다면 다음과 같이 쉘, CMD 혹은 Powershell에 입력하면 된다냥.</P>
        <OutCode>
            $ nyan run [파일명]
        </OutCode>
        <P>만약 <InCode>nyan</InCode>이라는 명령어가 없다고 나온다면, 실행 파일이 설치된 경로가 환경변수에 제대로 추가되어 있지 않은 것일 수 있다냥.</P>
    </DocsTemplate>
}