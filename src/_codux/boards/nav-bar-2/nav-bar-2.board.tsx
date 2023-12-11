import { createBoard } from '@wixc3/react-board';
import { NavBar2 } from '../../../components/nav-bar-2/nav-bar-2';

export default createBoard({
    name: 'NavBar2',
    Board: () => <NavBar2 />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 1036
    }
});
