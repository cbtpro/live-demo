import { defineComponent } from 'vue'

export default defineComponent({
  name: 'd3-topo-json',
  render() {
    return (
      <svg
        width='1140'
        id='industry-chain-svg'
        height='550'
        font-size='12'
        style='user-select: none; color: rgb(41, 42, 45);'
      >
        <g id='container' transform='translate(57,27.5) scale(0.9)'>
          <g id='g-link'>
            <path
              class='left-industry-chain-link'
              d='M 570 275 450 275'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#FFA408'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='left-industry-chain-link'
              d='M 450 275
                      L 370 275
                      L 370 155
                      340 155
                      '
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='left-industry-chain-link'
              d='M 450 275
                      L 370 275
                      L 370 315
                      340 315
                      '
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='left-industry-chain-link'
              d='M 450 275
                      L 370 275
                      L 370 355
                      340 355
                      '
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='left-industry-chain-link'
              d='M 450 275
                      L 370 275
                      L 370 395
                      340 395
                      '
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='left-industry-chain-link'
              d='M 269.5555992126465 155
                                L 192 155
                                L 192 115
                                162 115
                                '
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='left-industry-chain-link'
              d='M 269.5555992126465 155
                                L 192 155
                                L 192 155
                                162 155
                                '
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='left-industry-chain-link'
              d='M 269.5555992126465 155
                                L 192 155
                                L 192 195
                                162 195
                                '
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='left-industry-chain-link'
              d='M 269.5555992126465 315
                                L 192 315
                                L 192 275
                                162 275
                                '
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='left-industry-chain-link'
              d='M 269.5555992126465 315
                                L 192 315
                                L 192 315
                                162 315
                                '
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='left-industry-chain-link'
              d='M 269.5555992126465 315
                                L 192 315
                                L 192 355
                                162 355
                                '
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 570 275 690 35'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#FFA408'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 570 275 690 515'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#FFA408'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 515
                    L 770 515
                    L 770 415
                    800 415'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#E3E3E3'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 35
                    L 770 35
                    L 770 -185
                    800 -185'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 35
                    L 770 35
                    L 770 -145
                    800 -145'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 35
                    L 770 35
                    L 770 15
                    800 15'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 35
                    L 770 35
                    L 770 175
                    800 175'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 35
                    L 770 35
                    L 770 215
                    800 215'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 35
                    L 770 35
                    L 770 255
                    800 255'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 515
                    L 770 515
                    L 770 335
                    800 335'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 515
                    L 770 515
                    L 770 375
                    800 375'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 515
                    L 770 515
                    L 770 455
                    800 455'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 515
                    L 770 515
                    L 770 495
                    800 495'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 515
                    L 770 515
                    L 770 535
                    800 535'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 515
                    L 770 515
                    L 770 575
                    800 575'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 515
                    L 770 515
                    L 770 615
                    800 615'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 515
                    L 770 515
                    L 770 655
                    800 655'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 690 515
                    L 770 515
                    L 770 695
                    800 695'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 922.4443588256836 -145
                                 L 972 -145
                                 L 972 -165
                                 1002 -165'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 922.4443588256836 -145
                                 L 972 -145
                                 L 972 -125
                                 1002 -125'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 934.4443435668945 15
                                 L 972 15
                                 L 972 -45
                                 1002 -45'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 934.4443435668945 15
                                 L 972 15
                                 L 972 -5
                                 1002 -5'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 934.4443435668945 15
                                 L 972 15
                                 L 972 35
                                 1002 35'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 934.4443435668945 15
                                 L 972 15
                                 L 972 75
                                 1002 75'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 922.4443588256836 175
                                 L 972 175
                                 L 972 155
                                 1002 155'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
            <path
              class='right-industry-chain-link'
              d='M 922.4443588256836 175
                                 L 972 175
                                 L 972 195
                                 1002 195'
              fill-opacity='1'
              stroke-opacity='1'
              stroke='#64A0FF'
              stroke-dasharray='0 0'
              stroke-width='1'
              fill='transparent'
            ></path>
          </g>
          <g id='rootNode' transform='translate(570,275)'>
            <circle cx='0' cy='0' r='50' fill='#FFA408'></circle>
            <text
              y='6'
              text-anchor='middle'
              fill='#fff'
              style='font-size: 16px; font-weight: 600;'
            >
              大数据
            </text>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-1'
            transform='translate(570, 275)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='10'
              width='0'
              height='0'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(0, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d=''
                transform='scale(0.0125)'
                fill='none'
              ></path>
            </g>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-2'
            transform='translate(450, 275)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-58'
              width='0'
              height='0'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='34' fill='#34B4FE'></circle>
            <text
              id='prd100000100'
              x='0'
              text-anchor='middle'
              fill='#fff'
              y='4.5'
              style='font-size: 14px; font-weight: 500;'
            >
              上游
            </text>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(-68, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d=''
                transform='scale(0.0125)'
                fill='none'
              ></path>
            </g>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-3'
            transform='translate(320, 155)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-40.444400787353516'
              width='60.444400787353516'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025ofs'
              x='14'
              y='4.5'
              text-anchor='end'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              硬件设备
            </text>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(-50.444400787353516, 0)'
              visibility='visible'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d=''
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-4'
            transform='translate(320, 315)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-40.444400787353516'
              width='60.444400787353516'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd100001656'
              x='14'
              y='4.5'
              text-anchor='end'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              基础设备
            </text>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(-50.444400787353516, 0)'
              visibility='visible'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d=''
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-5'
            transform='translate(320, 355)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-79.44437408447266'
              width='99.44437408447266'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000000452'
              x='0'
              y='4.5'
              text-anchor='end'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              数据中心建设
            </text>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(-78.44437408447266, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-6'
            transform='translate(320, 395)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-67.44438552856445'
              width='87.44438552856445'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025mbq'
              x='0'
              y='4.5'
              text-anchor='end'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              大数据平台
            </text>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(-66.44438552856445, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-7'
            transform='translate(142, 115)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-43.44441604614258'
              width='63.44441604614258'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000000017'
              x='0'
              y='4.5'
              text-anchor='end'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              服务器
            </text>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(-42.44441604614258, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-8'
            transform='translate(142, 155)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-42.33330535888672'
              width='62.33330535888672'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000001542'
              x='0'
              y='4.5'
              text-anchor='end'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              光模块
            </text>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(-41.33330535888672, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-9'
            transform='translate(142, 195)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-42.33330535888672'
              width='62.33330535888672'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000001713'
              x='0'
              y='4.5'
              text-anchor='end'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              交换机
            </text>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(-41.33330535888672, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-10'
            transform='translate(142, 275)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-55.444400787353516'
              width='75.44440078735352'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000000205'
              x='0'
              y='4.5'
              text-anchor='end'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              基础软件
            </text>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(-54.444400787353516, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-11'
            transform='translate(142, 315)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-54.333290100097656'
              width='74.33329010009766'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000015345'
              x='0'
              y='4.5'
              text-anchor='end'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              电力设备
            </text>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(-53.333290100097656, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='left-industry-chain-node'
            id='left-industry-chain-node-12'
            transform='translate(142, 355)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-66.3332748413086'
              width='86.3332748413086'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd100004120'
              x='0'
              y='4.5'
              text-anchor='end'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              网络运营商
            </text>
            <g
              class='left-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(-65.3332748413086, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(2, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='angle_Line'
            transform='rotate(0,484 275)'
            point='{"x":484,"y":275}'
            style='opacity: 1;'
          >
            <path
              fill='#FFA408'
              stroke-width='1'
              d='M 484 275
  L 494 270
  L 494 280
  L 484 275'
            ></path>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-13'
            transform='translate(570, 275)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='0'
              height='0'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(0, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d=''
                transform='scale(0.0125)'
                fill='none'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-14'
            transform='translate(690, 35)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='0'
              height='0'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='34' fill='#34B4FE'></circle>
            <text
              id='prd100000101'
              x='0'
              text-anchor='middle'
              fill='#fff'
              y='4.5'
              style='font-size: 14px; font-weight: 500;'
            >
              中游
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(68, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d=''
                transform='scale(0.0125)'
                fill='none'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-15'
            transform='translate(690, 515)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='0'
              height='0'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='34' fill='#34B4FE'></circle>
            <text
              id='prd100000102'
              x='0'
              text-anchor='middle'
              fill='#fff'
              y='4.5'
              style='font-size: 14px; font-weight: 500;'
            >
              下游
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(68, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d=''
                transform='scale(0.0125)'
                fill='none'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-16'
            transform='translate(820, -185)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='111.4443588256836'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000026xqg'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              大数据处理服务
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(102.4443588256836, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-17'
            transform='translate(820, -145)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='111.4443588256836'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000026xqf'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              大数据采集服务
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(102.4443588256836, 0)'
              visibility='visible'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-18'
            transform='translate(820, 15)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='123.44434356689453'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd100001659'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='#292A2D'
              style='font-size: 12px; font-weight: 400;'
            >
              数据存储及云平台
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(114.44434356689453, 0)'
              visibility='visible'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-19'
            transform='translate(820, 175)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='111.4443588256836'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000026xqh'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              大数据分析服务
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(102.4443588256836, 0)'
              visibility='visible'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-20'
            transform='translate(820, 215)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='71.02862548828125'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000017908'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              IDC服务
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(62.02862548828125, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-21'
            transform='translate(820, 255)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='75.44440078735352'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025m5a'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              数据安全
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(66.44440078735352, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-22'
            transform='translate(820, 335)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='87.44438552856445'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025m7v'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='#292A2D'
              style='font-size: 12px; font-weight: 400;'
            >
              政务大数据
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(78.44438552856445, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-23'
            transform='translate(820, 375)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='87.44438552856445'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025ob3'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='#292A2D'
              style='font-size: 12px; font-weight: 400;'
            >
              金融大数据
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(78.44438552856445, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-24'
            transform='translate(820, 415)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='default'
          >
            <rect
              y='-17'
              x='-20'
              width='72.44438552856445'
              height='34'
              rx='2'
              stroke='#E3E3E3'
              fill='#EFF2F6'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000026xqj'
              x='-14'
              y='4.5'
              text-anchor='start'
              fill='#999999'
              style='font-size: 12px; font-weight: 400;'
            >
              零售大数据
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#B3B3B3'
              stroke-width='1'
              transform='translate(62.44438552856445, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d=''
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-25'
            transform='translate(820, 455)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='86.3332748413086'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025fyx'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              工业大数据
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(77.3332748413086, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-26'
            transform='translate(820, 495)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='86.3332748413086'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025fyu'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              电信大数据
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(77.3332748413086, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-27'
            transform='translate(820, 535)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='86.3332748413086'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000026xqk'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              医疗大数据
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(77.3332748413086, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-28'
            transform='translate(820, 575)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='87.44438552856445'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000026xqi'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              传媒大数据
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(78.44438552856445, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-29'
            transform='translate(820, 615)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='86.3332748413086'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025oez'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              交通大数据
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(77.3332748413086, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-30'
            transform='translate(820, 655)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='87.44438552856445'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025ob5'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              能源大数据
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(78.44438552856445, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-31'
            transform='translate(820, 695)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='87.44438552856445'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025obb'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              环境大数据
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(78.44438552856445, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-32'
            transform='translate(1022, -165)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='62.33330535888672'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000017932'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              物联网
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(53.33330535888672, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-33'
            transform='translate(1022, -125)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='61.22219467163086'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd100001658'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              互联网
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(52.22219467163086, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-34'
            transform='translate(1022, -45)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='99.44437408447266'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd100001661'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              存储硬件设备
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(90.44437408447266, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-35'
            transform='translate(1022, -5)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='49.57073402404785'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025get'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              IaaS
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(40.57073402404785, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-36'
            transform='translate(1022, 35)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='46.55685234069824'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000020605'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              IDC
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(37.55685234069824, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-37'
            transform='translate(1022, 75)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='62.33330535888672'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000014123'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              云服务
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(53.33330535888672, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-38'
            transform='translate(1022, 155)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='111.4443588256836'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd100006059'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              大数据分析软件
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(102.4443588256836, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='right-industry-chain-node'
            id='right-industry-chain-node-39'
            transform='translate(1022, 195)'
            fill-opacity='1'
            stroke-opacity='1'
            cursor='pointer'
          >
            <rect
              y='-17'
              x='-20'
              width='52.96917152404785'
              height='34'
              rx='2'
              stroke='#768AA5'
              fill='#fff'
            ></rect>
            <circle cx='0' cy='0' r='0' fill='#34B4FE'></circle>
            <text
              id='prd000025gek'
              x='0'
              y='4.5'
              text-anchor='start'
              fill='false'
              style='font-size: 12px; font-weight: 400;'
            >
              SaaS
            </text>
            <g
              class='right-industry-chain-circle'
              stroke='#404247'
              stroke-width='1'
              transform='translate(43.96917152404785, 0)'
              visibility='hidden'
            >
              <circle r='6' fill='#ebeff7' cursor='pointer'></circle>
              <path d='m -4 0 l 8 0'></path>
              <path
                class='node-circle'
                visibility='hidden'
                d='m 0 -4 l 0 8'
              ></path>
            </g>
            <g transform='translate(-14, -6)'>
              <path
                class='icon-svg'
                d='M953.088 827.2h-31.552v-441.152c0-69.312-56.768-126.08-126.08-126.08h-188.992v-62.912c0-69.312-56.768-126.08-126.08-126.08H228.48c-69.312 0-126.08 56.768-126.08 126.08v630.016h-31.36a31.232 31.232 0 0 0-31.616 31.552c0 17.728 13.824 31.552 31.552 31.552h882.176a31.232 31.232 0 0 0 31.552-31.552 31.168 31.168 0 0 0-31.552-31.424m-409.6-567.04v567.04h-378.048v-630.144c0-34.752 28.352-62.976 62.976-62.976h251.968c34.752 0 62.976 28.352 62.976 62.976v63.04h0.128z m315.072 567.04h-252.16v-504.128h189.056c34.752 0 62.976 28.416 62.976 62.976v441.152h0.128z m-409.6-567.04h-188.992a31.232 31.232 0 0 0-31.552 31.488c0 17.6 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m0 189.056h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.664 13.824 31.488 31.552 31.488h188.992a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-188.992a31.232 31.232 0 0 0-31.552 31.552c0 17.728 13.824 31.552 31.552 31.552h188.992a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552m315.072-188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.664 13.76 31.488 31.488 31.488h62.976a31.232 31.232 0 0 0 31.552-31.488 31.232 31.232 0 0 0-31.552-31.552m0 188.992h-62.976a31.232 31.232 0 0 0-31.488 31.552c0 17.728 13.76 31.552 31.488 31.552h62.976a31.232 31.232 0 0 0 31.552-31.552 31.232 31.232 0 0 0-31.552-31.552'
                transform='scale(0.0125)'
                fill='#383B40'
              ></path>
            </g>
          </g>
          <g
            class='angle_Line'
            transform='rotate(116.56505117707799,674.8 65.4)'
            point='{"x":674.8,"y":65.4}'
            style='opacity: 1;'
          >
            <path
              fill='#FFA408'
              stroke-width='1'
              d='M 674.8 65.4
  L 684.8 60.400000000000006
  L 684.8 70.4
  L 674.8 65.4'
            ></path>
          </g>
          <g
            class='angle_Line'
            transform='rotate(243.434948822922,674.8 484.6)'
            point='{"x":674.8,"y":484.6}'
            style='opacity: 1;'
          >
            <path
              fill='#FFA408'
              stroke-width='1'
              d='M 674.8 484.6
  L 684.8 479.6
  L 684.8 489.6
  L 674.8 484.6'
            ></path>
          </g>
        </g>
      </svg>
    )
  },
})
