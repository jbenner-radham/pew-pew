import messageBus from './services/message-bus';
import Messages from './lib/Messages';
import Player from './lib/Player';

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') messageBus.emit(Messages.LEFT_KEY_DOWN_EVENT, event);
        if (event.key === 'ArrowRight') messageBus.emit(Messages.RIGHT_KEY_DOWN_EVENT, event);
        if (event.key === 'ArrowUp') messageBus.emit(Messages.UP_KEY_DOWN_EVENT, event);
        if (event.key === 'ArrowDown') messageBus.emit(Messages.DOWN_KEY_DOWN_EVENT, event);

        switch(event.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
                event.preventDefault();
            default:
                break;
        }
    });

    window.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowLeft') messageBus.emit(Messages.LEFT_KEY_UP_EVENT, event);
        if (event.key === 'ArrowRight') messageBus.emit(Messages.RIGHT_KEY_UP_EVENT, event);
        if (event.key === 'ArrowUp') messageBus.emit(Messages.UP_KEY_UP_EVENT, event);
        if (event.key === 'ArrowDown') messageBus.emit(Messages.DOWN_KEY_UP_EVENT, event);

        switch(event.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
                event.preventDefault();
            default:
                break;
        }
    });

    const canvas = document.getElementById('app') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const player = new Player(200, 200);
    setInterval(() => {
        ctx!.clearRect(0, 0, canvas.width, canvas.height);
        player.draw(ctx!);
    }, 10)
});