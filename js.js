window.addEventListener('load', initScene)

const dianas = [
    { x: 0, y: 0, z: -30 },
    { x: 0, y: 0, z: 30 },
    { x: 30, y: 0, z: 0 },
    { x: -30, y: 0, z: 0 },
    { x: 20, y: 0, z: 20 },
    { x: 20, y: 0, z: -20 },
    { x: -20, y: 0, z: -20 },
    { x: -20, y: 0, z: 20 }
]

let diana, score = 0

function initScene() {

    let orbits = document.querySelectorAll('.orbit')

    orbits.forEach(orbit => {

        dianas.forEach(pos => {

            diana = document.createElement('a-entity')
            diana.setAttribute('geometry', { primitive: 'circle', radius: Math.random() * 3 + 0.5 })
            diana.setAttribute('look-at', '#arma')
            diana.setAttribute('material', { shader: 'flat', side: 'double', src: '#diana' })
            diana.setAttribute('class', 'diana')
            diana.object3D.position.set(pos.x, pos.y, pos.z) 

            diana.setAttribute('shootable', '') 

            orbit.appendChild(diana) 
        })
    })
}

AFRAME.registerComponent('shootable', {
    init: function () {
        this.el.addEventListener('click', () => {
            this.el.parentNode.removeChild(this.el) 
            document.querySelector('[text]').setAttribute('value', `${++score} DIANAS ACERTADAS`)
        })
    }
})