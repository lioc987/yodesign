
$('header').height($(window).height());

function main() {

    (function () {
        'use strict';
        /* ==============================================
         Header's Height
         =============================================== */

        var particlesSetting = {
            particles: {
                color: '#fff',
                shape: 'circle', // "circle", "edge" or "triangle"
                opacity: 0.8,
                size: 3,
                size_random: true,
                nb: 150,
                line_linked: {
                    enable_auto: true,
                    distance: 140,
                    color: '#fff',
                    opacity: 0.7,
                    width: 1,
                    condensed_mode: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 600
                    }
                },
                anim: {
                    enable: true,
                    speed: 2
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 250
                },
                detect_on: 'window', // "canvas" or "window"
                mode: 'grab',
                line_linked: {
                    opacity: 0.5
                },
                events: {
                    onclick: {
                        enable: true,
                        mode: 'push', // "push" or "remove" (particles)
                        nb: 1
                    }
                }
            },
            /* Retina Display Support */
            retina_detect: true
        };

        if($(window).width()<600){
            particlesSetting.particles.nb = 75;
        }
        if(navigator.userAgent.indexOf('UCBrowser') == -1) {
            particlesJS('particles', particlesSetting);
        }
    }());


}
main();

