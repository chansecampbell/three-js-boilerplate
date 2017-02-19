import * as THREE from 'three';
import TWEEN from 'tween.js';
import Cube from './cube.js';

class Scene {
	constructor() {
		const that = this;
		this.scene = new THREE.Scene();
		this.createRenderer();
		this.createCamera();
		this.createLight();
		this.createObjects();
		this.render();
	}

	createRenderer() {
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(0x000000, 1.0);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.shadowMap.enabled = true;
		document.body.appendChild(this.renderer.domElement);
	}

	createCamera() {
		this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.camera.position.x = 5;
		this.camera.position.y = 10;
		this.camera.position.z = 23;
		this.camera.lookAt(this.scene.position);
	}

	createLight() {
		this.spotLight = new THREE.SpotLight(0xffffff);
		this.spotLight.position.set(10, 40, 20);
		this.spotLight.shadow.camera.near = 20;
		this.spotLight.shadow.camera.far = 50;
		this.spotLight.castShadow = true;
		this.scene.add(this.spotLight);
	}

	createObjects() {
		this.cube = new Cube(5, 5, 5);
		this.scene.add(this.cube.get());
	}

	render() {

		requestAnimationFrame( () => {
			this.render();
		});

		this.renderer.render(this.scene, this.camera);
		this.cube.update();
	}
}

new Scene;