var enemies = function(){

    this.position = new THREE.Vector2(Math.floor(Math.random() * 51), Math.floor(Math.random() * 51))
    const geometry = new THREE.CircleGeometry( 10, 10 ); 
    const material = new THREE.MeshBasicMaterial( { color: 0xFFC0CB } ); 
    const circle = new THREE.Mesh( geometry, material ); scene.add( circle )
}