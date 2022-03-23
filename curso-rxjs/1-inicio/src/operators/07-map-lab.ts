import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const texto = document.createElement( 'div' );
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat lacus dui, vel sagittis orci sollicitudin quis. Nam volutpat, elit sed facilisis tempus, erat nunc suscipit magna, ac iaculis arcu ante eget nibh. Vivamus nec arcu eget dui congue mollis. In luctus viverra sagittis. Duis porta magna felis, ultricies euismod quam efficitur faucibus. Curabitur ante diam, dictum eu augue at, fringilla sodales metus. Nam molestie iaculis ex a iaculis. In lobortis arcu et justo laoreet cursus. Suspendisse et erat quis tellus posuere venenatis. In congue finibus bibendum. In neque augue, porttitor pellentesque dictum ullamcorper, consectetur et mauris. Cras quis orci vestibulum, egestas enim a, tempor lectus. Nam dignissim tortor quis tortor condimentum, facilisis pharetra nisl gravida. Maecenas ultricies at augue nec accumsan.
<br/><br/>
Suspendisse consequat dapibus tincidunt. Ut imperdiet leo sagittis nibh bibendum, ultrices tempor velit commodo. Mauris accumsan imperdiet sem, in ultricies ante. Aliquam ultricies orci a malesuada lacinia. Ut eget ligula tempus, hendrerit libero eget, iaculis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat blandit nisl sed sollicitudin. Nulla lobortis pharetra arcu, vel hendrerit libero elementum quis. Nam efficitur pretium velit. Aliquam quis vehicula enim, eu varius neque. Maecenas sollicitudin ipsum nulla, et finibus dui tempor vel. Fusce at commodo libero. Vestibulum maximus ultrices purus ultricies vehicula. Vivamus sodales placerat tincidunt. Donec nec justo volutpat, condimentum nisi eget, auctor metus.
<br/><br/>
Etiam et metus quis ipsum maximus volutpat in at libero. Quisque gravida, ante non placerat congue, ante neque dignissim ante, nec commodo purus diam in massa. Aliquam fringilla tortor sit amet lectus lobortis interdum. Suspendisse tincidunt vestibulum nibh non fringilla. Ut in nisl condimentum, facilisis mauris in, egestas erat. Proin diam turpis, finibus at neque quis, aliquam gravida dolor. Nam et sem lacus. Duis vitae mauris nulla. Integer vel mattis nisi, non aliquam diam. Duis eget sem augue. Quisque eget felis vehicula, imperdiet lectus non, bibendum est. Phasellus vitae molestie ligula.
<br/><br/>
Quisque auctor tincidunt consectetur. Praesent facilisis faucibus erat et finibus. Praesent eget ipsum et mauris dignissim viverra nec ut metus. Maecenas libero metus, condimentum ut dictum ac, dictum in lorem. Etiam in est lectus. Integer pulvinar ante lobortis dolor ornare luctus. Suspendisse venenatis posuere suscipit. Morbi lacus arcu, laoreet vitae lacinia id, bibendum eget turpis. Maecenas condimentum lectus et sapien imperdiet, venenatis pulvinar erat blandit. Aliquam interdum vehicula turpis, vel venenatis dui cursus non. Ut sagittis ex eget lobortis elementum. Vestibulum pellentesque consequat risus, et commodo tellus pulvinar vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id lobortis metus. Aliquam pretium eget odio non mattis. Fusce felis velit, consectetur ut sollicitudin ultricies, tincidunt at metus.
<br/><br/>
Vivamus volutpat purus mi, sit amet tempor nulla sagittis ut. Vestibulum ipsum urna, volutpat eu bibendum et, dignissim eu nibh. Sed laoreet turpis ac nisi convallis, et commodo libero consectetur. In accumsan, libero suscipit condimentum dapibus, lorem purus pellentesque risus, nec mattis magna nulla sed nibh. Proin ac malesuada metus. Etiam auctor efficitur est, ut tincidunt libero. Maecenas scelerisque nunc sagittis metus rhoncus dapibus eu sit amet ipsum. Etiam in enim finibus, euismod risus tempor, blandit ante. Maecenas sit amet leo facilisis, convallis nisi non, sagittis urna. In ultrices elit eu diam volutpat feugiat. Mauris sit amet ullamcorper dolor. Integer pharetra ac magna in consequat. Nullam porta urna non lectus fringilla faucibus. Vivamus quam ante, facilisis sit amet eleifend quis, tempor ornare libero. In imperdiet eros eros, eu efficitur velit venenatis semper. Phasellus sit amet accumsan augue.
`;

const body = document.querySelector( 'body' );
body.append( texto );

const progressBar = document.createElement( 'div' );
progressBar.setAttribute( 'class', 'progress-bar' );
body.append( progressBar );

// Función que calcule el width del progress bar
const calcularPorcentajeScroll = ( event ) => {
   const {
      scrollTop,
      scrollHeight,
      clientHeight
   } = event.target.documentElement;

   return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
};

//Streams
const scroll$ = fromEvent( document, 'scroll' );
// scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(
   map( event => calcularPorcentajeScroll(event) )
);

progress$.subscribe( porcentaje => {
   progressBar.style.width = `${ porcentaje }%`;
});