import * as THREE from 'three';

class Cube {

    constructor(width, height, depth) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.geometry = new THREE.CubeGeometry(this.width, this.height, this.depth);
        this.material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.x = 0;
        this.mesh.position.y = 5;
        this.mesh.position.z = 10;
        this.mesh.name = 'cube';
    }

    getMesh() {
        return this.mesh;
    }
}

export default Cube;