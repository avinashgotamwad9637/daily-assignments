 // Setup isScrolling variable
            var isScrolling;

            // Listen for scroll events
            window.addEventListener('scroll', function ( event ) {

                    // Clear our timeout throughout the scroll
                    window.clearTimeout( isScrolling );

                    // Set a timeout to run after scrolling ends
                    isScrolling = setTimeout(function() {

                // Run the callback
            if(document.querySelector('#mydiv').style.background=='red')
                document.querySelector('#mydiv').style.background='blue';
            else if(document.querySelector('#mydiv').style.background=='blue')
                document.querySelector('#mydiv').style.background='yellow'
            else if(document.querySelector('#mydiv').style.background=='yellow')
                document.querySelector('#mydiv').style.background='green'
            else if(document.querySelector('#mydiv').style.background=='green')
                document.querySelector('#mydiv').style.background='grey'
            else if(document.querySelector('#mydiv').style.background=='grey')
                document.querySelector('#mydiv').style.background='brown'
            else if(document.querySelector('#mydiv').style.background=='brown')
                document.querySelector('#mydiv').style.background='black'
            else 
                document.querySelector('#mydiv').style.background='red'

            }, 66);

          }, false);