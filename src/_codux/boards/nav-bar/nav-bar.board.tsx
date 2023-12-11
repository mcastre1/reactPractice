import { createBoard } from '@wixc3/react-board';
import { NavBar } from '../../../components/NavBar';

export default createBoard({
    name: 'NavBar',
    Board: () => <NavBar key={null} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
