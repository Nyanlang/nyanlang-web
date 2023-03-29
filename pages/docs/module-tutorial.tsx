import DocsTemplate from "@/components/docs-template";
import {Bold, H1, H2, H3, InCode, MyTable, OutCode, P} from "@/components/docs-component";

export default function DocsModuleTutorial() {
    return <DocsTemplate title={"모듈 튜토리얼"}>
        <H1 id={"explain-module"}>모듈에 대하여</H1>
        <P>이 글에서는 고오급 기능인 모듈 기능에 대해서 알아볼 거다냥.</P>
        <P>모듈은 상당히 복잡한 작동 원리로 동작하기 때문에냥, 이거에 익숙해지기 위해서는 꽤 오랜 시간이 걸릴 수도 있다냥.</P>
        <P>하지만, 모듈을 이해하고 나면 냥랭이 조금 더 효율적이게 될 거다냥.</P>
        <H2 id={"module-keywords"}>모듈 관련 키워드</H2>
        <P>일단, 모듈 관련 키워드를 먼저 알아보자냥.</P>
        <MyTable head={["키워드", "설명"]} body={[
            ["먕", "모듈 포인터 증가"],
            ["먀", "모듈 포인터 감소"],
            [";", "모듈 포인터가 가리키는 모듈에 쓰기"],
            [":", "모듈 포인터가 가리키는 모듈에서 읽기"],
            ["'", "부모/자식 모듈 메모리 간 전환"]
        ]} />
        <H2 id={"module-memory-explained"}>모듈의 새로운 메모리</H2>
        <P>모듈 시스템은 완전히 새로운 메모리를 쓴다냥.</P>
        <P>명심해라냥. <Bold>이 모듈 시스템이 쓰는 메모리는 기본 튜토리얼에서 배웠던 메모리와는 완전히 다른, 새로운 공간이다냥.</Bold></P>
        <P>물론, 기본적인 작동 원리는 똑같다냥.<br />다만 모듈 메모리의 다른 점은, 포인터가 가리키는 주소에 <Bold>값 대신 커뮤니케이터</Bold>가 들어가 있는거다냥.</P>
        <P>이 커뮤니케이터는 다른 모듈과 연결되어, 서로 간의 소통을 위한 통로 역할을 한다냥.</P>
        <P>지금은 이 커뮤니케이터에 대해 조금 아리송해도 괜찮다냥. 조금 뒤에 다시 설명할 거다냥.</P>
        <H2 id={"module-connect-explained"}>냥랭 파일간의 연결</H2>
        <P><Bold>모듈</Bold>이라는 이름이 붙었다고 해서 냥랭과 크게 다른 것은 없다냥.<br/>똑같은 냥랭 파일인거다냥.</P>
        <P>모듈도 어쨋던 간에 하나의 냥랭 파일이기 때문에, 보통의 냥랭 파일과 다를 바 없이 run 커맨드로 실행할 수 있는거다냥.</P>
        <P>다만, 만약 한 냥랭 파일에서 다른 냥랭 파일과 커뮤니케이터로 연결하고, 서로 소통하면서 실행하고 싶다면, 그때 모듈을 쓰는거다냥.</P>
        <P>이 때 연결된 각 파일의 메모리는 독립적이다냥. 즉, 파일이 연결되었다고 해서 같은 메모리를 쓰는 것은 아니고, 각 모듈들도 처음에는 텅 빈 메모리를 가진다냥.</P>
        <P>냥랭 파일간의 연결은 <Bold>.mouse</Bold> 파일로 이루어진다냥.</P>
        <P>이 마우스 파일은 냥랭 파일 간의 연결을 정의하는 역할을 하는데냥,<br/>예를 들면 다음과 같다냥.</P>
        <OutCode>
            0-{">"}0: example-children1.nyan <br/>
            1-{">"}0: example-children2.nyan
        </OutCode>
        <P>마우스 파일의 형식은 반드시 위와 같아야 한다냥.</P>
        <P><InCode>숫자-{">"}숫자: 냥랭 파일이름&줄바꿈</InCode>인거다냥.<br/>숫자는 지금은 신경쓰지 않아도 된다냥. 조금 뒤에 설명할 거다냥.</P>
        <P>이 마우스 파일은 하나의 냥랭 파일에 종속된다냥. 따라서, 같은 폴더 같은 이름으로 확장자만 달라야 인식이 제대로 될거다냥.</P>
        <OutCode>
            - example.nyan <br/>
            - example.mouse<br/>
            - example-children1.nyan<br/>
            - example-children2.nyan
        </OutCode>
        <P>위의 코드는 위의 마우스 파일 예제에 대한 프로젝트 구조다냥.</P>
        <P>위와 같은 구조에 마우스 파일을 정의하게 되면, <InCode>example.nyan</InCode>에서 모듈 키워드를 통해 <InCode>example-children1.nyan</InCode>과 <InCode>example-children2.nyan</InCode>에 접근하고 소통할 수 있을 뿐만 아니라, <br/>일방적으로 마우스 파일에 의해 참조당한 <InCode>example-children1.nyan</InCode>과 <InCode>example-children2.nyan</InCode>에서도 <InCode>example.nyan</InCode>과 소통할 수 있게 된다냥.</P>
        <P>즉, 커뮤니케이터가 하나만 열려도 쌍방향 소통이 가능하다는 뜻이다냥.</P>
        <H2 id={"module-community-explained"}>냥랭 파일간의 소통</H2>
        <P>이제 어떻게 커뮤니케이터로 냥랭 파일끼리 연결하는지를 알아봤으니, <br/>어떻게 커뮤니케이터를 사용해 서로 소통할 수 있는지를 알아볼 차례다냥.</P>
        <P>아까 말했듯이, 냥랭의 모듈 키워드는 완전히 새로운 메모리를 사용한다냥.</P>
        <P>그 메모리의 주소마다 값 대신 커뮤니케이터가 들어가 있고, 실행중에는 커뮤니케이터를 사용할 수만 있을 뿐, 바꿀 수는 없다냥.</P>
        <P>그 이유는 모듈 메모리가 마우스 파일에 의해 정의되기 때문이다냥.</P>
        <H3 id={"module-memory-define"}>모듈 메모리 정의</H3>
        <P>잠깐 위의 마우스 파일 예제를 다시 꺼내오겠다냥.</P>
        <OutCode>
            0-{">"}0: example-children1.nyan <br/>
            1-{">"}0: example-children2.nyan
        </OutCode>
        <P>아까 설명하지 못하고 지나쳤던 저 숫자들이 냥랭의 모듈 메모리를 정의한다냥.</P>
        <P>냥랭은 두 개의 모듈 메모리를 가지고 있다냥. <Bold>부모 모듈 메모리</Bold>와 <Bold>자식 모듈 메모리</Bold>가 그 주인공이다냥.</P>
        <P>부모 모듈 메모리는 다른 파일이 자기 자신을 마우스 파일에 명시해서 연결되었을 때, 그 다른 파일들과의 커뮤니케이터가 담긴다냥.</P>
        <P>자식 모듈 메모리는 자기 자신의 마우스 파일에 명시된 자식 파일들과의 커뮤니케이터가 담긴다냥.</P>
        <MyTable head={["부모 모듈 메모리 주소", "부모 모듈 메모리 값", "자식 모듈 메모리 주소", "자식 모듈 메모리 값"]} body={[
            ["-", "-", "0", "example <-> children1"],
            ["-", "-", "1", "example <-> children2"],
        ]} caption={"example.nyan의 모듈 메모리"} />
        <MyTable head={["부모 모듈 메모리 주소", "부모 모듈 메모리 값", "자식 모듈 메모리 주소", "자식 모듈 메모리 값"]} body={[
            ["0", "example <-> children1", "-", "-"],
        ]} caption={"example-children1.nyan의 모듈 메모리"} />
        <MyTable head={["부모 모듈 메모리 주소", "부모 모듈 메모리 값", "자식 모듈 메모리 주소", "자식 모듈 메모리 값"]} body={[
            ["0", "example <-> children2", "-", "-"],
        ]} caption={"example-children2.nyan의 모듈 메모리"} />
        <H3 id={"module-memory-control"}>모듈 메모리 조작</H3>
        <P>이제 정의된 모듈 메모리를, 모듈 키워드를 이용해 조작하면서 사용할 수 있다냥.</P>
        <P><InCode>먕</InCode>과 <InCode>먀</InCode> 키워드는, 기본 튜토리얼을 보고 충분히 연습한 사람이라면 아마 익숙하게 보일거다냥.</P>
        <P>맞다냥. <InCode>먕</InCode>과 <InCode>먀</InCode> 키워드는 기본 튜토리얼의 <InCode>?</InCode>와 <InCode>!</InCode> 키워드와 똑같다냥.</P>
        <P>차이점은, <InCode>먕</InCode><InCode>먀</InCode>는 <Bold>모듈 포인터의 주소를 증가/감소</Bold>시키는 반면, <InCode>?</InCode><InCode>!</InCode> 키워드는 <Bold>일반 포인터의 주소를 증가/감소</Bold>시킨다냥.</P>
        <H3 id={"module-memory-io"}>커뮤니케이션</H3>
        <P>이제 키워드를 사용해 파일과 커뮤니케이션을 해볼거다냥.</P>
        <P>기본적으로, 냥랭은 여러개의 파일을 동시에 실행시키지 않는다냥.<br/>즉, 한번에 한 개의 파일을 실행시킨다는 뜻이다냥.</P>
        <P>마우스 파일을 사용해 자식 파일과의 커뮤니케이터를 만들었을 때, 그 커뮤니케이터에 값을 보내달라고 요청하는 것으로 커뮤니케이터와 연결된 자식 파일을 깨울 수 있다냥.</P>
        <P>예를 들어, <InCode>example.nyan</InCode> 파일이 다음과 같다고 해보자냥.</P>
        <OutCode>
            냥냥냥냥냥 냥냥냥냥냥 냥냥냥~? 냥냥냥냥냥! 냐-?;
        </OutCode>
        <P>이 파일을 실행시키면, 맨 마지막의 <InCode>;</InCode> 키워드에 도달한 시점에 일반 메모리 주소 1에는 값 65가 저장된다냥.</P>
        <P>그리고 일반 포인터가 주소 1을 가리킨 상태로, <Bold>모듈에 쓰기</Bold>를 실행한다냥.</P>
        <P>모듈 포인터는 <InCode>먕</InCode>과 <InCode>먀</InCode>, <InCode>'</InCode>가 실행되지 않은 상태이므로 <Bold>자식 모듈 메모리의 주소 0</Bold>을 가리키고 있을 것이다냥.</P>
        <P>따라서 자식 메모리 0번에 있는 <InCode>example {"<->"} children1</InCode> 커뮤니케이터를 타고, <InCode>example-children1.nyan</InCode> 파일을 실행시킨다냥.</P>
        <P><InCode>example-children1.nyan</InCode> 파일이 다음과 같다고 해보자냥.</P>
        <OutCode>
            냥냥냥냥냥 냥냥냥냥 냥냥냥~? 냥냥냥냥냥! 냐-? 냥!: .?.
        </OutCode>
        <P>코드가 맨 처음부터 실행되어, <InCode>:</InCode> 키워드에 도달한 시점에 메모리는 주소 0번에 0, 주소 1번에 66이 저장될거다냥.</P>
        <P>그리고 일반 포인터가 주소 0번을 가리킨 상태로 <InCode>:</InCode> 키워드를 사용하였으므로, 일반 메모리 주소 0번에 값 65가 저장된다냥.</P>
        <P>이 때 명심할 점은, 이렇게 값이 자식 파일로 전달되었다고 해서 이 데이터를 준 부모 파일에서 값이 없어지는 게 아니라는 거다냥.</P>
        <P>이렇게 <InCode>:</InCode><InCode>;</InCode> 키워드로 값이 전송되면, 이 값은 복사되는 거다냥. 즉, 두 파일에 모두 남는거다냥.</P>
        <P>이렇게 받아온 뒤, 값 65를 출력하므로 처음에 A가 출력되고, 그 다음 일반 메모리의 주소를 1로 바꿔서 출력하였으므로 값 66, B가 출력된다냥.</P>
    </DocsTemplate>
}