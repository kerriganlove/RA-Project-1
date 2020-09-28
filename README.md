# RA-Project-1

React-Active를 활용한 안드로이드 어플리케이션 토이 프로젝트

OPIC과 유사한 환경 조성

초기 난이도 및 서베이 설정
DB에서 서베이에 입각하여 문장 Select

꺼내온 문장을 API(없으면 관련 자료 분석하여 직접 만듬)를 활용하여 읽게 만듬.

Play 버튼 및 Next 버튼과 같은 디자인도 유사하게 구현

개인 프로젝트이므로 배포 x, 코드는 공개 예정.

사용 언어: React-Active

사용 툴 : Firebase(Maybe), VSCODE

향후 추가 예정.

# 2020-09-28 문제점 해결

기존 디자인은 ButtonGroup이나 어떤 영역을 나누게 될 때 Class extends Component를 활용해 컴포넌트를 만들어서 이를 다시 export default 클래스에 넣는 방식을 차용하였다.

실제 StartWindow는 3개의 컴포넌트가 존재했다 (Main, Title, ButtonGroup)

근데 이게 navigation의 기능을 인식하지 못하는 사태가 일어났다.(정확히 export default 클래스를 해당 Component로 바꾸니 사용 가능해짐.)

각 디자인별로 수정해야되는 부분을 알고, 평소 React를 사용하던 사람도 Header, Context 부분을 나눠서 관리하는 것을 보고 그렇게 차용해서 사용했는데

막상 네비게이션 하려니까 그게 안되서 뭔가 이상함을 느낌.

일단 네비게이션 문제는 해결 완료는 했는데, 정확한 이유를 알고 싶음. 아니면 내가 모르는 부분이 있는 것인지.
