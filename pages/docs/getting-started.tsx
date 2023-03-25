import DocsTemplate from "@/components/docs-template";
import {H1, H2, P, InCode, Bold, OutCode, MyTable} from "@/components/docs-component";

export default function DocsGettingStarted() {
    return <DocsTemplate>
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
        <H1 id={"hello-world"}>Hello World 예제</H1>
        <P>
            냥랭은 Brainfuck 프로그래밍 언어로부터 파생된 언어다냥.<br/>
            다만 냥랭은 냥랭만의 특별한 기능이 몇 가지 있기 때문에, 익숙하지 않을 수도 있다냥.
        </P>
        <P>때문에, 일단 Hello World 예제를 통해 냥랭의 기본을 알고 가는거다냥.</P>
        <H2 id={"keyword-table"}>키워드 미리보기</H2>
        <P>냥랭은 한 글자가 모두 하나의 행동을 나타낸다냥.<br/>그리고 냥랭에서는 그것들을 <Bold>키워드</Bold>라고 부른다냥.</P>
        <P>그래서, 일단 앞으로 배워나갈 냥랭의 키워드들을 간단한 설명과 함께 미리 보여주겠다냥.</P>
        <MyTable head={["키워드", "설명"]} body={
            [
                ["?", "메모리 포인터 증가"],
                ["!", "메모리 포인터 감소"],
                ["냥", "메모리 포인터가 가리키는 주소의 값 증가"],
                ["냐", "메모리 포인터가 가리키는 주소의 값 감소"],
                [".", "메모리 포인터가 가리키는 주소의 값을 유니코드로 변환 후 출력"],
                [",", "하나의 문자를 입력받아 메모리 포인터가 가리키는 주소에 유니코드로 변환 후 저장"],
                ["~", "메모리 포인터가 가리키는 주소의 값이 0일 때 짝이 되는 -로 점프"],
                ["-", "메모리 포인터가 가리키는 주소의 값이 0이 아닐 때 짝이 되는 ~로 점프"],
                ["뀨", "메모리 포인터가 가리키는 주소의 값을 그대로 출력"],
                ["먕", "모듈 포인터 증가"],
                ["먀", "모듈 포인터 감소"],
                [";", "모듈 포인터가 가리키는 모듈에 쓰기"],
                [":", "모듈 포인터가 가리키는 모듈에서 읽기"],
                ["'", "부모/자식 모듈 포인터 간 전환"]
            ]
        } />
    </DocsTemplate>
}