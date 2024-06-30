import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/CJ.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 3,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />
      <svg xmlns="http://www.w3.org/2000/svg"       
        width="698pt"
        height="850pt"
        version="1.0"
        viewBox="0 0 698 850"      >
     <g
      className="svg-container"
      transform="translate() scale(.1 -.1)"
      fill="none"
    >
<path ref={outlineLogoRef}  d=" M414.291107,398.210693   C433.204803,396.702087 452.118530,395.193481 471.563934,394.152954   C472.090149,436.425812 472.144806,478.230774 472.038422,520.035278   C472.010559,530.977661 471.482452,541.918640 471.184113,552.860291   C468.348175,559.082581 465.109955,564.529053 458.107574,567.456116   C409.850616,587.627991 359.833679,599.318115 307.369812,599.724426   C303.543671,599.754089 299.718597,599.918396 295.000732,600.024841   C289.194061,599.423279 284.288239,598.734253 279.363983,598.223328   C225.357559,592.620117 180.946442,569.028687 146.995819,526.625488   C116.158127,488.110199 101.286629,442.897583 94.007492,394.847931   C87.940758,354.801331 87.574432,314.591431 91.828751,274.317108   C96.200356,232.932465 106.398270,193.166763 125.026505,155.820038   C154.046005,97.640450 197.987732,56.051903 260.483643,35.647190   C272.395355,31.758051 284.774384,29.300108 296.937805,26.181847   C312.673340,25.130867 328.399963,23.376766 344.146271,23.178091   C375.098114,22.787556 405.434113,28.321318 435.627808,34.492710   C448.490295,37.121727 461.299896,40.019569 474.096466,42.956875   C481.819183,44.729530 486.216583,51.493126 484.951141,59.343460   C482.198669,76.418663 478.787109,93.412354 476.731232,110.569519   C473.366241,138.651764 470.784363,166.829727 468.054199,194.984970   C467.269531,203.076736 467.110443,211.229187 466.639465,219.810898   C456.117279,220.730148 445.729614,221.691086 435.332245,222.532669   C421.909271,223.619125 408.478577,224.610138 394.882202,224.868347   C394.796448,203.667313 396.097656,183.152603 394.637177,162.836426   C393.018250,140.315643 382.301270,122.447983 359.970001,114.183105   C338.771881,106.337601 316.868317,105.405006 294.720276,109.713745   C271.700195,113.888138 253.374878,125.746849 239.087921,144.015717   C223.223557,164.301636 215.160629,187.972122 210.009537,212.785492   C201.748978,252.577713 201.454926,292.844818 203.552216,333.190338   C205.041962,361.848328 208.887894,390.186981 216.992203,417.813507   C224.515808,443.460510 235.237701,467.485443 253.523941,487.457581   C269.181366,504.558502 288.354736,514.999329 312.526611,517.287781   C347.622864,521.309998 375.273865,506.916748 391.500214,476.621704   C401.008026,458.870422 406.033112,439.626434 409.940430,420.033630   C411.391113,412.759399 412.840881,405.485016 414.291107,398.210693  z"/>
<path ref={outlineLogoRef}  d=" M443.483887,263.055908   C443.908447,260.455994 444.333038,257.856079 444.801117,254.989883   C511.184601,254.648758 577.373657,256.930573 644.239258,248.659470   C642.765869,265.633606 641.351074,281.932953 639.906494,298.575623   C635.431030,299.690216 630.951843,300.723053 626.518372,301.924683   C610.109436,306.371979 604.413757,312.839203 603.078735,329.878479   C601.791016,346.314606 600.692871,362.788147 600.258728,379.264893   C597.919922,468.039459 595.751587,556.818665 593.661621,645.599487   C592.946716,675.971436 588.919434,705.586975 576.144958,733.553894   C561.218811,766.231140 536.773010,789.980347 505.675690,806.694946   C488.624054,815.859985 470.258789,822.584778 452.454651,830.338196   C451.151764,830.905640 449.594818,830.889771 447.679871,830.601807   C441.872803,822.209412 436.541870,814.360229 431.210846,806.511169   C426.693848,799.860535 427.459503,795.512756 433.716309,790.487183   C439.558746,785.794373 445.298401,780.968872 450.980652,776.082458   C471.875122,758.114563 485.218445,735.673523 491.327118,708.759460   C495.589081,689.982056 497.795898,670.961975 497.848206,651.801453   C498.132904,547.495056 498.140961,443.187866 498.143402,338.880951   C498.143555,332.242371 497.701416,325.544495 496.746735,318.978638   C495.177704,308.187775 490.578796,303.475830 479.636932,303.069611   C469.215942,302.682739 458.735657,303.837372 448.283722,304.360565   C441.775421,304.686401 438.539612,301.099152 439.410431,294.729340   C440.852234,284.182983 442.134430,273.614868 443.483887,263.055908  z"/>
<path ref={outlineLogoRef}  d=" M296.477142,26.120468   C284.774384,29.300108 272.395355,31.758051 260.483643,35.647190   C197.987732,56.051903 154.046005,97.640450 125.026505,155.820038   C106.398270,193.166763 96.200356,232.932465 91.828751,274.317108   C87.574432,314.591431 87.940758,354.801331 94.007492,394.847931   C101.286629,442.897583 116.158127,488.110199 146.995819,526.625488   C180.946442,569.028687 225.357559,592.620117 279.363983,598.223328   C284.288239,598.734253 289.194061,599.423279 294.534607,600.098572   C285.579437,600.671448 276.191681,601.696960 266.817902,601.582153   C237.552124,601.223633 209.226517,596.003174 182.526276,583.552246   C135.099747,561.436218 103.006767,524.745422 82.371025,477.388947   C67.670715,443.653503 60.123032,408.152191 56.905987,371.603821   C54.298279,341.978027 54.239197,312.363037 57.070206,282.778381   C62.962460,221.203018 80.162842,163.565552 118.387413,113.813660   C154.634521,66.635544 202.832825,38.918461 261.292572,29.075283   C272.712738,27.152412 284.434052,27.018261 296.477142,26.120468  z"/>
<path ref={outlineLogoRef}  d=" M443.051605,263.016907   C442.134430,273.614868 440.852234,284.182983 439.410431,294.729340   C438.539612,301.099152 441.775421,304.686401 448.283722,304.360565   C458.735657,303.837372 469.215942,302.682739 479.636932,303.069611   C490.578796,303.475830 495.177704,308.187775 496.746735,318.978638   C497.701416,325.544495 498.143555,332.242371 498.143402,338.880951   C498.140961,443.187866 498.132904,547.495056 497.848206,651.801453   C497.795898,670.961975 495.589081,689.982056 491.327118,708.759460   C485.218445,735.673523 471.875122,758.114563 450.980652,776.082458   C445.298401,780.968872 439.558746,785.794373 433.716309,790.487183   C427.459503,795.512756 426.693848,799.860535 431.210846,806.511169   C436.541870,814.360229 441.872803,822.209412 447.316345,830.322754   C440.270172,833.265381 433.082947,835.870911 425.967499,838.659668   C423.333862,839.691833 421.778320,839.109253 420.211914,836.730957   C414.994537,828.809021 409.547028,821.038879 404.209198,813.195984   C400.932007,808.380798 402.102386,803.242432 406.472321,799.275085   C418.526855,788.331238 431.284607,777.962463 442.045685,765.840637   C457.744537,748.156738 464.961273,726.053528 467.767639,702.994385   C470.294769,682.229919 471.446594,661.231567 471.965881,640.305603   C472.655670,612.508179 472.146149,584.680908 472.135498,556.866455   C472.135071,555.709778 471.967743,554.553101 471.531128,553.128357   C471.482452,541.918640 472.010559,530.977661 472.038422,520.035278   C472.144806,478.230774 472.090149,436.425812 472.022278,394.131073   C471.666473,372.351074 471.915710,351.035919 470.911530,329.779968   C470.260773,316.005280 464.656372,311.119019 450.882202,310.880676   C441.607697,310.720215 432.302246,311.841827 423.024017,312.562347   C415.758118,313.126617 412.310181,309.427765 413.353210,302.130951   C414.976685,290.773193 416.450470,279.394104 417.998871,268.025543   C418.218018,266.416382 418.500031,264.815765 418.789764,262.977875   C426.992554,262.977875 434.805939,262.977875 443.051605,263.016907  z"/>
<path ref={outlineLogoRef}  d=" M295.099213,109.767227   C316.868317,105.405006 338.771881,106.337601 359.970001,114.183105   C382.301270,122.447983 393.018250,140.315643 394.637177,162.836426   C396.097656,183.152603 394.796448,203.667313 394.599548,224.549881   C383.425751,225.989349 372.365540,226.973404 361.595520,227.931625   C361.595520,218.352646 361.767242,209.245789 361.554657,200.147919   C361.248016,187.024429 361.909149,173.716949 359.939697,160.826813   C355.662537,132.832748 339.649048,117.308624 311.792725,112.064659   C306.404694,111.050354 300.918854,110.555290 295.099213,109.767227  z"/>
<path ref={outlineLogoRef}  d=" M413.818787,398.100586   C412.840881,405.485016 411.391113,412.759399 409.940430,420.033630   C406.033112,439.626434 401.008026,458.870422 391.500214,476.621704   C375.273865,506.916748 347.622864,521.309998 312.934021,517.259033   C319.893616,513.352356 327.786774,510.388916 334.532623,505.755157   C349.184631,495.690521 357.503876,480.682648 363.926819,464.551025   C371.656525,445.137421 375.665436,424.787811 379.014771,404.264343   C379.258209,402.772614 380.881836,400.442871 382.041504,400.330078   C392.453857,399.317352 402.906006,398.714081 413.818787,398.100586  z"/>
</g>
</svg>
      

      {/* <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      > <g
      className="svg-container"
      transform="translate(0 457) scale(.1 -.1)"
      fill="none"
    >
       
          <path
            ref={outlineLogoRef}
            d="m2930 4560c-344-16-623-85-915-228-231-114-406-241-600-436-61-60-145-137-188-169-432-325-715-757-806-1230-109-564 21-1117 384-1641 250-360 780-877 1547-1511 451-373 600-505 803-708 215-216 275-293 350-448 55-114 75-188 82-298 6-96-6-173-39-257-21-53-27-59-73-76-136-51-374-73-521-46-401 71-763 376-1088 916-21 35-43 63-50 63s-32-13-57-29c-74-48-229-141-233-141-3 0-54-31-113-68s-135-84-168-102c-33-19-67-39-77-45-9-5-56-34-105-63-48-29-153-94-233-143s-152-92-160-96c-26-12-144-86-180-114-19-15-137-88-262-164-130-78-228-143-228-151s30-70 66-137c207-379 396-640 644-887 219-218 401-350 665-480 247-122 484-196 775-241 172-27 628-38 819-19 636 61 1161 302 1561 716 47 48 128 120 181 160 402 304 684 722 804 1189 61 240 70 318 70 640 0 259-3 304-23 418-84 467-268 823-647 1257-192 218-401 409-1095 995-637 539-1034 894-1208 1081-152 163-223 311-223 465 0 43 2 83 5 88 20 32 266 41 394 15 322-65 649-312 972-731 39-51 70-83 82-83 10 0 283 234 615 528 328 290 684 605 792 700s197 181 199 191-38 62-100 131c-399 446-754 740-1106 918-314 159-659 255-962 268-63 2-135 6-160 7-25 2-110 0-190-4zm570-58c671-123 1188-450 1813-1144 53-60 97-112 96-115-1-12-411-367-423-367-6 0-20-13-31-28-11-16-164-156-340-312l-320-283-18 24c-239 311-459 523-675 651-99 59-246 117-344 137-112 23-311 21-416-4-200-48-373-182-450-349-32-70-34-82-34-176 0-179 64-318 229-494 182-195 573-545 1213-1086 693-585 897-771 1085-985 379-434 563-790 647-1257 20-113 23-161 23-398 0-300-10-384-70-620-97-379-302-729-586-1e3 -105-100-185-166-191-159-9 8-63-29-92-63-48-57-291-191-482-266-202-79-481-143-735-167-188-18-606-8-779 19-290 45-528 119-775 241-385 190-680 444-972 836-118 159-345 527-332 538 46 36 763 456 773 453 16-7 36 11 30 27-3 9 131 99 212 142 28 15 203 122 231 141 21 14 23 13 45-23 225-384 515-687 794-829 164-84 300-115 503-115 125 0 235 15 340 46 17 5 22 4 17-4-13-22 24-13 47 11 12 13 53 40 91 61 193 105 351 279 418 462 18 49 21 82 22 199 1 165-11 222-79 363-75 156-135 232-355 453-208 208-355 338-808 713-766 633-1288 1142-1537 1501-305 440-449 908-415 1355 24 318 109 596 262 848 74 123 192 277 231 301 18 11 43 38 56 61 24 42 155 164 277 255 293 221 660 367 1050 419 167 23 601 15 754-13zm-2357-938c-321-485-398-1123-203-1693 70-208 178-417 315-615 250-360 780-877 1547-1511 451-373 600-505 803-708 215-216 275-292 350-448 65-136 80-200 79-343-1-134-15-186-80-302-60-108-201-244-326-317-53-31-55-28-31 35 12 33 17 79 17 184 1 165-12 222-79 363-75 156-135 232-355 453-208 208-355 338-808 713-766 633-1288 1142-1537 1501-305 440-449 908-415 1355 34 454 190 817 504 1174 58 66 264 256 277 256 4 0-23-44-58-97zm2095-529c212-43 445-176 659-378 129-121 368-406 360-429-2-6-95-93-208-193l-204-182-18 24c-105 137-202 250-307 355-191 192-351 304-540 380-145 58-234 72-415 67l-153-4 24 47c28 57 121 159 181 200 71 49 158 88 240 108 99 25 274 27 381 5zm-2672-5486c233-416 511-757 812-997 275-219 616-385 967-472 225-55 364-71 669-76 307-6 445 3 666 43 255 46 474 119 698 233l117 60-75-71c-377-356-881-572-1471-628-188-18-606-8-779 19-465 72-868 244-1222 521-180 141-402 382-575 625-130 183-342 550-326 566 11 11 446 277 454 278 4 1 33-45 65-101z"
          />
</g>
      </svg> */}
    </div>
  )
}

export default Logo