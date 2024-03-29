import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
<>
<div className="bg-secondary-subtle">
<div class="container my-5">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <div class="lc-block mb-3">
                    <div editable="rich">
                        <h2 class="fw-bold display-4 text-primary">Hello, I'm Full Stack Web Developer&nbsp;<p></p>
                            <p></p>
                        </h2>
                    </div>
                </div>

                <div class="lc-block mb-3">
                    <div editable="rich">
                        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                        </p>
                    </div>
                </div>

                <div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start"><a class="btn btn-outline-primary px-4 me-md-2" href="#" role="button">Click me, I'm a button</a>
                    <a class="btn btn-outline-secondary px-4" href="#" role="button">Click me, I'm a button</a>
                </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <div class="lc-block"><img class="rounded-start w-100" src="https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfDF8fHwxNjIxNDQ4NTEw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080" alt="Photo by Diego PH" width="720"/></div>
            </div>
        </div>
    </div>
</div>
</>

)
}

export default Home
