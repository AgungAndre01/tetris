class Button {
	constructor(pos, size, onClick, screenIndex) {
		this.pos = pos;
		this.screenIndex = screenIndex;
		this.onClick = onClick;
		this.size = size;
	}

	click() {
		if (!this.check()) return false;
		this.onClick();
		return true;
	}

	render() {}

	checkCoord() {
		return (
			mouseX >= this.pos.x &&
			mouseX <= this.pos.x + this.size.x &&
			mouseY >= this.pos.y &&
			mouseY <= this.pos.y + this.size.y
		);
	}

	checkScreen() {
		return this.screenIndex == tetrisScreen.currentScreen;
	}

	check() {
		return this.checkScreen() && this.checkCoord();
	}
}
