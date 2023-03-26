import DocsTemplate from "@/components/docs-template";
import {Bold, H1, H2, H3, InCode, MyTable, OutCode, P} from "@/components/docs-component";

export default function DocsBasicTutorial() {
    return <DocsTemplate title={"기본 튜토리얼"}>
        <H1 id={"explain-basic-keywords"}>기본 키워드 설명</H1>
        <P>이 글에서는 기본 키워드인 <InCode>?</InCode>, <InCode>!</InCode>, <InCode>냥</InCode>, <InCode>냐</InCode>, <InCode>.</InCode>, <InCode>,</InCode>, <InCode>~</InCode>, <InCode>-</InCode>, <InCode>뀨</InCode>에 대해서 알아볼 거다냥.</P>
        <P>이외의 키워드들은 모두 이해하기에는 아직 이른 키워드이므로, 나중으로 미뤄두는거다냥.</P>
        <H2 id={"pointer-move-explained"}>포인터의 주소 변경</H2>
        <P>우선, 냥랭 파일이 처음 실행될 때 메모리의 상태는 다음과 같다냥.</P>
        <MyTable head={["포인터", "주소", "값"]} body={[
            ["포인터 ->", 0, 0],
            ["", 1, 0],
            ["", "...", "..."]
        ]} />
        <P>포인터는 메모리의 주소를 가리키고 있고, 그 주소의 초기값은 0이다냥.<br/>또한 특별히 값이 담기지 않은 메모리의 주소는 항상 값 0을 기본으로 가지고 있다냥.</P>
        <P>만약 포인터를 아래로 넘기고 싶다면, <InCode>?</InCode> 키워드를 사용해서 포인터가 가리키는 메모리 주소를 증가시킬 수 있다냥.</P>
        <MyTable caption={"? 키워드를 한번 사용했을 때 메모리의 변화"} head={["포인터", "주소", "값"]} body={[
            ["", 0, 0],
            ["포인터 ->", 1, 0],
            ["", "...", "..."]
        ]} />
        <P>마찬가지로, 포인터를 위로 넘기고 싶다면 <InCode>!</InCode> 키워드를 사용해서 포인터가 가리키는 메모리 주소를 감소시킬 수 있다냥.</P>
        <MyTable caption={"! 키워드를 한번 사용했을 때 메모리의 변화"} head={["포인터", "주소", "값"]} body={[
            ["포인터 ->", 0, 0],
            ["", 1, 0],
            ["", "...", "..."]
        ]} />
        <H2 id={"pointer-value-change-explained"}>포인터의 값 변경</H2>
        <P>포인터가 가리키고 있는 주소의 값을 변경할 수도 있다냥.</P>
        <P>포인터가 가리키고 있는 주소의 값을 1 늘리고 싶다면, <InCode>냥</InCode> 키워드를 사용해서 늘릴 수 있다냥.</P>
        <MyTable caption={"냥 키워드를 한번 사용했을 때 메모리의 변화"} head={["포인터", "주소", "값"]} body={[
            ["포인터 ->", 0, 1],
            ["", 1, 0],
            ["", "...", "..."]
        ]} />
        <P>포인터가 가리키고 있는 주소의 값을 1 줄이고 싶다면, <InCode>냐</InCode> 키워드를 사용해서 줄일 수 있다냥.</P>
        <MyTable caption={"냐 키워드를 한번 사용했을 때 메모리의 변화"} head={["포인터", "주소", "값"]} body={[
            ["포인터 ->", 0, 0],
            ["", 1, 0],
            ["", "...", "..."]
        ]} />
        <H2 id={"output-explained"}>출력과 디버깅</H2>
        <P>외부로 입력과 출력을 할 수도 있다냥.</P>
        <P>포인터가 가리키고 있는 주소의 값을 외부로 출력하고 싶다면 <InCode>.</InCode> 키워드 혹은 <InCode>뀨</InCode> 키워드를 사용하면 된다냥.<br/>
            <InCode>.</InCode> 키워드와 <InCode>뀨</InCode> 키워드는 모두 <Bold>출력</Bold>이라는 점에서는 똑같지만, <InCode>.</InCode> 키워드는 <Bold>값을 유니코드로 변환해 문자로 출력</Bold>하는 반면, <InCode>뀨</InCode> 키워드는 <Bold>값을 숫자 그대로 출력</Bold>한다는 점을 유의해야 한다냥.</P>
        <P>예시를 하나 들어보면,</P>
        <MyTable head={["포인터", "주소", "값"]} body={[
            ["포인터 ->", 0, 65],
            ["", 1, 0],
            ["", "...", "..."]
        ]} />
        <P>만약 위와 같은 메모리가 있는 상태에서, <InCode>.</InCode> 키워드를 쓴다면 <InCode>A</InCode>가 출력될 것이고냥, <InCode>뀨</InCode> 키워드를 쓴다면 <InCode>{"{"}65{"}"}</InCode>가 출력될 것이다냥.</P>
        <P>따라서 <InCode>뀨</InCode> 키워드는 디버깅 용도로만 사용하는 걸 권장한다냥.</P>
        <H2 id={"input-explained"}>입력</H2>
        <P>포인터가 가리키고 있는 주소의 값을 외부로 입력받은 값으로 설정하고 싶다면 <InCode>,</InCode> 키워드를 사용하면 된다냥.</P>
        <P>단, 주의할 점은 이 <InCode>,</InCode> 키워드가 한 번에 한 문자만을 입력받는다냥.</P>
        <P>
            만약 <InCode>,</InCode> 키워드를 두 번 쓴 상태(<InCode>,,</InCode>)에서 <InCode>Hello</InCode>를 입력했다면,<br/>
            냥랭은 첫번째로 입력받은 <InCode>H</InCode>의 유니코드 값인 72를 메모리에 저장한 다음, 두번째로 입력받은 <InCode>e</InCode>의 유니코드 값인 101을 메모리에 저장한다냥.
        </P>
        <P>그리고 입력이 더 이상 없을 경우, 0을 가져간다냥.<br />예를 들어 <InCode>,</InCode> 키워드를 두 번 쓴 상태에서 <InCode>H</InCode> 문자를 입력받는다면,<br/>두번째 <InCode>,</InCode> 키워드에서는 0이 메모리에 저장된다냥.</P>
        <H2 id={"loop-explained"}>반복하기</H2>
        <P>냥랭에서는 <InCode>~</InCode> 키워드와 <InCode>-</InCode> 키워드를 사용해 특정한 키워드를 반복해서 실행할 수도 있다냥.</P>
        <P>우선 <InCode>~</InCode> 키워드는 현재 포인터가 가리키고 있는 주소의 값이 0이라면 짝이 되는 <InCode>-</InCode> 키워드로 점프한다냥.<br />
            반대로, <InCode>-</InCode> 키워드는 현재 포인터가 가리키고 있는 주소의 값이 0이 아니라면 짝이 되는 <InCode>~</InCode> 키워드로 점프한다냥.</P>
        <P>이걸 활용해 반복문을 만들 수 있다냥.</P>
        <P>예를 들어 메모리의 주소 1번에 값 65를 넣고 싶다고 해보자냥.</P>
        <P>물론 <InCode>냥</InCode> 키워드를 65번 써서 할 수도 있다냥. 하지만 너무 비효율적이지 않냥?</P>
        <P>이 때 위의 키워드들을 활용해서 반복을 하면 쉽게 65를 저장할 수 있는거다냥.</P>
        <OutCode>
            냥냥냥냥냥 냥냥냥냥냥 냥냥냥~? 냥냥냥냥냥! 냐-.
        </OutCode>
        <P>처음, 포인터가 가리키는 주소가 0인 시점에서 <InCode>냥</InCode> 키워드가 13번 쓰였으므로, 메모리의 주소 0에는 값 13이 들어간다냥.</P>
        <MyTable head={["포인터", "주소", "값"]} body={[
            ["포인터 ->", 0, 13],
            ["", 1, 0],
            ["", "...", "..."]
        ]} />
        <P>이후 <InCode>~</InCode> 키워드가 있는데, 포인터가 기리키고 있는 주소인 0에 있는 값은 13, 즉 0이 아니므로 그냥 지나치게 된다냥.<br/>
            그 다음 <InCode>?</InCode> 키워드로 주소를 1 증가시켜 포인터가 가리키는 주소를 1로 만들고, 주소 1에 5를 더한다냥.</P>
        <MyTable head={["포인터", "주소", "값"]} body={[
            ["", 0, 13],
            ["포인터 ->", 1, 5],
            ["", "...", "..."]
        ]} />
        <P>그 뒤 <InCode>!</InCode> 키워드로 주소를 1 감소시키면 포인터가 가리키는 주소는 다시 0이 된다냥.</P>
        <MyTable head={["포인터", "주소", "값"]} body={[
            ["포인터 ->", 0, 13],
            ["", 1, 5],
            ["", "...", "..."]
        ]} />
        <P>그리고 포인터가 가리키고 있는 주소인 0의 값은 13인 상태에서, <InCode>냐</InCode> 키워드를 써 값을 1 감소시킨 뒤 <InCode>-</InCode> 키워드를 써서 0인지 아닌지를 검사한다냥.</P>
        <MyTable head={["포인터", "주소", "값"]} body={[
            ["포인터 ->", 0, 12],
            ["", 1, 5],
            ["", "...", "..."]
        ]} />
        <P>만약 주소 0의 값이 0이 아니라면 다시 <InCode>~</InCode> 키워드로 돌아갈 것이고, 한 번 반복할 때마다 <Bold>주소 1의 값은 5씩 증가</Bold>, 그리고 주소 0의 값은 1씩 감소하므로<br />
            <Bold>총 13번 반복해서 주소 1의 값은 5 * 13인 65</Bold>를 갖게 된다냥.</P>
        <H3 id={"loop-input"}>길이가 정해지지 않은 입력</H3>
        <P>길이가 정해지지 않은 입력을 받을 수도 있다냥.</P>
        <P>입력은 항상 끝이 있는데, 이 끝을 EOF(End-Of-File)이라고 한다냥.<br/>그리고 이 EOF는 항상 값이 0이다냥.</P>
        <P>따라서, 만약 들어오는 모든 입력을 순서대로 메모리에 저장하고 싶다면 다음과 같이 할 수 있다냥.</P>
        <OutCode>
            냥~? ,-
        </OutCode>
        <P>하지만 이렇게만 해서는 메모리가 제대로 바뀌는 지 볼 수 없으므로, 디버깅용인 <InCode>뀨</InCode> 키워드를 쓸거다냥.</P>
        <OutCode>
            냥~? , 뀨-
        </OutCode>
        <P>먼저 <InCode>~</InCode>의 0 검사를 피하기 위해 메모리 0에 1을 더하고, 반복에 들어간다냥.</P>
        <P>그리고 포인터의 주소를 하나 더한 뒤, 입력을 받는다냥. 따라서 입력된 문자가 있다면 <InCode>-</InCode> 키워드가 작동해 짝이 되는 <InCode>~</InCode>로 이동하면서 반복을 하게 될 것이고,<br/>
            입력이 있는 한 계속해서 다음 주소에 입력된 문자의 유니코드 값을 저장할 거다냥.</P>
        <P>만약 입력이 끝나면, EOF 즉 0이 메모리에 저장되므로 <InCode>-</InCode> 키워드를 지나치면서 프로그램이 끝나게 되는 거다냥.</P>
        <H2 id={"comment"}>주석</H2>
        <P><InCode>""</InCode>로 감싸는 모든 문자는 주석으로 처리된다냥.<br/>만약 키워드가 아닌 이상한 문자가 주석 밖에 있다면, 냥랭은 그 문자를 오류로 처리한다냥.</P>
        <OutCode>
            "냥냥냥. 인터프리터 바보다냥."<br />
            냥.
        </OutCode>
        <H1 id={"hello-world"}>Hello World 예제</H1>
        <P>냥랭의 Hello World 예제는 다음과 같다냥.</P>
        <OutCode>
            냥냥냥냥냥 냥냥냥~? 냥냥냥냥~? 냥냥? 냥냥냥? 냥냥냥? 냥!!!! 냐-? 냥? 냥? 냐?? 냥~! -! 냐-??<br />
            .? 냐냐냐. 냥냥냥냥냥 냥냥.. 냥냥냥.?? .! 냐.! . 냥냥냥. 냐냐냐냐냐 냐.<br />
            냐냐냐냐냐 냐냐냐.?? 냥.? 냥냥.<br />
        </OutCode>

        <P>이 예제를 실행하면 다음과 같은 결과가 나온다냥.</P>
        <OutCode>
            $ nyan run "examples/hello world.nyan"<br/>
            Hello World!
        </OutCode>
        <P>이제 이 예제를 스스로 분석해보라냥. 지금까지 배운 것들로 충분히 이해할 수 있는 코드다냥!</P>
    </DocsTemplate>
}