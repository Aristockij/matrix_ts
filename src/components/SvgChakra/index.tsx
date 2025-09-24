import { useTranslations } from "next-intl";

const Index = ({ data }) => {
  const t = useTranslations("ChakraSchema");

  const cx = (x, w) => x + w / 2;
  const cy = (y, h) => y + h / 2;

  return (
    <>
      {data && (
        <svg
          version='1.1'
          id='Слой_1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          x='0px'
          y='0px'
          viewBox='0 0 1500 1500'
          //   style="enable-background:new 0 0 1500 1500;" xml:space="preserve"
        >
          <style type='text/css'>{`
        .st0{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
        .st1{fill:none;stroke:#8B499F;stroke-width:3;stroke-miterlimit:10;}
        .st2{fill:none;stroke:#FF0000;stroke-width:3;stroke-miterlimit:10;}
        .st3{fill:#FFEC45;}
        .st4{fill:#EB4642;}
        .st5{fill:#8B499F;}
        .st6{fill:#5374FD;}
        .st7{fill:#4FD2EC;}
        .st8{fill:#B6E274;}
        .st9{fill:#FFFFFF;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
        .st10{fill:#FFA93B;}
        .st11{fill:none;}
        .st12{fill:#FFFFFF;}
        .st13{font-family:'ArialMT';}
        .st14{font-size:40px;}
        .st15{font-size:60px;}
        .st16{fill:#A8FA66;}
        .st17{font-family:'Arial-BoldMT';}
        .st18{font-size:51px;}
        .st19{fill:#FA0907;}
        .st20{font-size:20px;}
        .st21{font-size:25px;}
        .st22{font-size:23px;}
        circle{fill: #000000}
        text{fill: #000000}
      `}</style>
          <line className='st0' x1='750.5' y1='1149.25' x2='750.5' y2='340' />
          <g>
            <path
              className='st0'
              d='M1439,758.25c-65.33-163.33-130.67-326.67-196-490c-162-69.33-324-138.67-486-208
		c-162.33,66.33-324.67,132.67-487,199c-68.33,163.33-136.67,326.67-205,490c65.33,162.33,130.67,324.67,196,487
		c161.01,69.17,322.02,138.33,483.03,207.5c162.66-66.5,325.31-133,487.97-199.5C1301,1082.25,1370,920.25,1439,758.25z'
            />
            <rect
              x='337.5'
              y='337.5'
              className='st0'
              width='824'
              height='831'
            />
            <path
              className='st0'
              d='M748.5,1338.5c-194-195-388-390-582-585c194-195.33,388-390.67,582-586c195,195.33,390,390.67,585,586
		C1138.5,948.5,943.5,1143.5,748.5,1338.5z'
            />
            <path
              className='st1'
              d='M469.5,469.5c223.8,225.17,447.61,450.33,671.41,675.5'
            />
            <path
              className='st2'
              d='M1080.92,421.95c-225.17,223.8-450.33,447.61-675.5,671.41'
            />
          </g>
          <line className='st0' x1='1126' y1='766.75' x2='361' y2='766.75' />
          <g>
            <circle className='st3' cx='748.29' cy='753.8' r='59' />
            <circle className='st4' cx='1333' cy='753.8' r='59' />
            <circle className='st5' cx='166' cy='753.8' r='59' />
            <circle className='st6' cx='748.29' cy='264.5' r='37.5' />
            <circle className='st7' cx='748.29' cy='339.5' r='37.5' />
            <circle className='st6' cx='262.5' cy='753.8' r='37.5' />
            <circle className='st7' cx='337.5' cy='753.8' r='37.5' />
            <circle className='st8' cx='559.5' cy='753.8' r='37.5' />
            <circle className='st8' cx='749.5' cy='562.5' r='37.5' />
            <circle className='st9' cx='1235' cy='753.8' r='37.5' />
            <circle className='st9' cx='846' cy='753.8' r='37.5' />
            <circle className='st9' cx='923' cy='753.8' r='37.5' />
            <circle className='st9' cx='1042.05' cy='458.45' r='35.76' />
            <circle className='st9' cx='1093.96' cy='406.54' r='35.76' />
            <circle className='st9' cx='403.05' cy='1100.45' r='35.76' />
            <circle className='st9' cx='454.96' cy='1048.54' r='35.76' />
            <circle className='st9' cx='405.05' cy='407.54' r='35.76' />
            <circle className='st9' cx='456.96' cy='459.45' r='35.76' />
            <circle className='st9' cx='1044.55' cy='1049.04' r='35.76' />
            <circle className='st9' cx='1096.46' cy='1100.95' r='35.76' />
            <circle className='st9' cx='1058' cy='858' r='37.5' />
            <circle className='st9' cx='960' cy='960' r='37.5' />
            <circle className='st9' cx='861' cy='1061' r='37.5' />
            <circle className='st10' cx='1158.5' cy='753.8' r='37.5' />
            <circle className='st9' cx='748.29' cy='1240' r='37.5' />
            <circle className='st10' cx='748.29' cy='1163.5' r='37.5' />
            <circle className='st4' cx='748.29' cy='1338' r='59' />
            <circle className='st9' cx='1163.5' cy='1171.5' r='59' />
            <circle className='st9' cx='337.5' cy='339.5' r='59' />
            <circle className='st9' cx='337.5' cy='1170.5' r='59' />
            <circle className='st5' cx='748.29' cy='168' r='59' />
            <circle className='st9' cx='1162.5' cy='339.5' r='59' />
            <rect x='225' y='716' className='st11' width='75' height='75' />
            <text
              x={cx(225, 75)}
              y={cy(716, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st12 st13 st14'
            >
              {data.R}
            </text>
            <rect x='300' y='716' className='st11' width='75' height='75' />
            <text
              x={cx(300, 75)}
              y={cy(716, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st12 st13 st14'
            >
              {data.Q}
            </text>
            <rect x='1122' y='716' className='st11' width='75' height='75' />
            <text
              x={cx(1122, 75)}
              y={cy(716, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.S}
            </text>
            <rect x='1197' y='716' className='st11' width='75' height='75' />
            <text
              x={cx(1197, 75)}
              y={cy(716, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.T}
            </text>
            <rect x='810' y='716' className='st11' width='75' height='75' />
            <text
              x={cx(810, 75)}
              y={cy(716, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.U}
            </text>
            <rect x='885' y='716' className='st11' width='75' height='75' />
            <text
              x={cx(885, 75)}
              y={cy(716, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.V}
            </text>
            <rect x='1009' y='1013' className='st11' width='71' height='72' />
            <text
              x={cx(1009, 71)}
              y={cy(1013, 72)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data[1]}
            </text>
            <rect x='1061' y='1065' className='st11' width='71' height='72' />
            <text
              x={cx(1061, 71)}
              y={cy(1065, 72)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data[2]}
            </text>
            <rect x='1020' y='820' className='st11' width='75' height='75' />
            <text
              x={cx(1020, 75)}
              y={cy(820, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.L}
            </text>
            <rect x='922' y='923' className='st11' width='75' height='75' />
            <text
              x={cx(922, 75)}
              y={cy(923, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.J}
            </text>
            <rect x='823' y='1024' className='st11' width='75' height='75' />
            <text
              x={cx(823, 75)}
              y={cy(1024, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.K}
            </text>
            <rect x='522' y='716' className='st11' width='75' height='75' />
            <text
              x={cx(522, 75)}
              y={cy(716, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.X}
            </text>
            <rect x='712' y='525' className='st11' width='75' height='75' />
            <text
              x={cx(712, 75)}
              y={cy(525, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.W}
            </text>
            <rect x='107' y='695' className='st11' width='118' height='118' />
            <text
              x={cx(107, 118)}
              y={cy(695, 118)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st12 st13 st15'
            >
              {data.A}
            </text>
            <rect x='1274' y='695' className='st11' width='118' height='118' />
            <text
              x={cx(1274, 118)}
              y={cy(695, 118)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st12 st13 st15'
            >
              {data.C}
            </text>
            <rect
              x='688.5'
              y='109.5'
              className='st11'
              width='118'
              height='118'
            />
            <text
              x={cx(688.5, 118)}
              y={cy(109.5, 118)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st12 st13 st15'
            >
              {data.B}
            </text>
            <rect
              x='688.5'
              y='1276.5'
              className='st11'
              width='118'
              height='118'
            />
            <text
              x={cx(688.5, 118)}
              y={cy(1276.5, 118)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st12 st13 st15'
            >
              {data.D}
            </text>
            <rect
              x='1104.5'
              y='1111.5'
              className='st11'
              width='118'
              height='118'
            />
            <text
              x={cx(1104.5, 118)}
              y={cy(1111.5, 118)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st15'
            >
              {data.I}
            </text>
            <rect x='420.5' y='424.5' className='st11' width='71' height='72' />
            <text
              x={cx(420.5, 71)}
              y={cy(424.5, 72)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.Y}
            </text>
            <rect x='368.5' y='372.5' className='st11' width='71' height='72' />
            <text
              x={cx(368.5, 71)}
              y={cy(372.5, 71)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.Z}
            </text>
            <rect x='278' y='280' className='st11' width='118' height='118' />
            <text
              x={cx(278, 118)}
              y={cy(280, 118)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st15'
            >
              {data.F}
            </text>
            <rect x='417' y='1014.5' className='st11' width='72' height='71' />
            <text
              x={cx(417, 72)}
              y={cy(1014.5, 71)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data[4]}
            </text>
            <rect x='365' y='1066.5' className='st11' width='72' height='71' />
            <text
              x={cx(365, 72)}
              y={cy(1066.5, 71)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data[3]}
            </text>
            <rect
              x='276.5'
              y='1110'
              className='st11'
              width='118'
              height='118'
            />
            <text
              x={cx(276.5, 118)}
              y={cy(1110, 118)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st15'
            >
              {data.H}
            </text>
            <rect x='1006.5' y='422' className='st11' width='72' height='71' />
            <text
              x={cx(1006.5, 72)}
              y={cy(422, 71)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data[5]}
            </text>
            <rect x='1058.5' y='370' className='st11' width='72' height='71' />
            <text
              x={cx(1058.5, 72)}
              y={cy(370, 71)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data[6]}
            </text>
            <rect
              x='1103'
              y='279.5'
              className='st11'
              width='118'
              height='118'
            />
            <text
              x={cx(1103, 118)}
              y={cy(279.5, 118)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st15'
            >
              {data.G}
            </text>
            <rect x='690' y='695' className='st11' width='118' height='118' />
            <text
              x={cx(690, 118)}
              y={cy(695, 118)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st15'
            >
              {data.E}
            </text>
            <rect x='711' y='230' className='st11' width='75' height='75' />
            <text
              x={cx(711, 75)}
              y={cy(230, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st12 st13 st14'
            >
              {data.M}
            </text>
            <rect x='711' y='305' className='st11' width='75' height='75' />
            <text
              x={cx(711, 75)}
              y={cy(305, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st12 st13 st14'
            >
              {data.N}
            </text>
            <rect x='711' y='1127' className='st11' width='75' height='75' />
            <text
              x={cx(711, 75)}
              y={cy(1127, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.O}
            </text>
            <rect x='711' y='1202' className='st11' width='75' height='75' />
            <text
              x={cx(711, 75)}
              y={cy(1202, 75)}
              textAnchor='middle'
              dominantBaseline='central'
              className='st13 st14'
            >
              {data.P}
            </text>
          </g>
          <g>
            <g>
              <circle cx='106' cy='641' r='8' />
              <circle cx='125' cy='595' r='8' />
              <circle cx='144' cy='551' r='8' />
              <circle cx='181' cy='461' r='8' />
              <circle cx='200' cy='415' r='8' />
              <circle cx='219' cy='371' r='8' />
              <circle className='st9' cx='160' cy='509' r='8' />
            </g>
            <g>
              <circle cx='1391' cy='641' r='8' />
              <circle cx='1372' cy='595' r='8' />
              <circle cx='1353' cy='551' r='8' />
              <circle cx='1316' cy='461' r='8' />
              <circle cx='1297' cy='415' r='8' />
              <circle cx='1278' cy='371' r='8' />
              <circle className='st9' cx='1337' cy='509' r='8' />
            </g>
            <g>
              <circle cx='1387' cy='867' r='8' />
              <circle cx='1368' cy='913' r='8' />
              <circle cx='1349' cy='957' r='8' />
              <circle cx='1312' cy='1047' r='8' />
              <circle cx='1293' cy='1093' r='8' />
              <circle cx='1274' cy='1137' r='8' />
              <circle className='st9' cx='1333' cy='999' r='8' />
            </g>
            <g>
              <circle cx='217.42' cy='1138.05' r='8' />
              <circle cx='199.3' cy='1091.7' r='8' />
              <circle cx='181.14' cy='1047.34' r='8' />
              <circle cx='145.86' cy='956.66' r='8' />
              <circle cx='127.74' cy='910.3' r='8' />
              <circle cx='109.58' cy='865.95' r='8' />
              <circle className='st9' cx='165.94' cy='1005.05' r='8' />
            </g>
            <g>
              <circle cx='640.83' cy='1399.07' r='8' />
              <circle cx='595.24' cy='1379.11' r='8' />
              <circle cx='551.04' cy='1360.59' r='8' />
              <circle cx='461.96' cy='1321.41' r='8' />
              <circle cx='416.37' cy='1301.45' r='8' />
              <circle cx='372.17' cy='1282.93' r='8' />
              <circle className='st9' cx='510.38' cy='1341.43' r='8' />
            </g>
            <g>
              <circle cx='862.09' cy='1392.51' r='8' />
              <circle cx='908.05' cy='1373.42' r='8' />
              <circle cx='952.6' cy='1355.74' r='8' />
              <circle cx='1042.4' cy='1318.26' r='8' />
              <circle cx='1088.36' cy='1299.17' r='8' />
              <circle cx='1132.91' cy='1281.49' r='8' />
              <circle className='st9' cx='993.61' cy='1337.35' r='8' />
            </g>
            <g>
              <circle cx='1133.59' cy='221.62' r='8' />
              <circle cx='1088.09' cy='201.47' r='8' />
              <circle cx='1043.96' cy='182.77' r='8' />
              <circle cx='955.04' cy='143.23' r='8' />
              <circle cx='909.53' cy='123.08' r='8' />
              <circle cx='865.41' cy='104.38' r='8' />
              <circle className='st9' cx='1003.38' cy='163.44' r='8' />
            </g>
            <g>
              <circle cx='639.39' cy='106.69' r='8' />
              <circle cx='593.09' cy='124.94' r='8' />
              <circle cx='548.79' cy='143.23' r='8' />
              <circle cx='458.21' cy='178.77' r='8' />
              <circle cx='411.91' cy='197.03' r='8' />
              <circle cx='367.61' cy='215.31' r='8' />
              <circle className='st9' cx='506.54' cy='158.55' r='8' />
            </g>
          </g>
          <rect
            x='928.66'
            y='830.94'
            className='st11'
            width='78.93'
            height='63.01'
          />
          <text
            transform='matrix(1 0 0 1 928.6641 867.4531)'
            className='st16 st17 st18'
          >
            $
          </text>
          <g>
            <path
              className='st19'
              d='M824.88,991.53c-0.83-3.15-2.01-6.1-3.54-8.86c-1.53-2.76-4.5-7.05-8.9-12.86c-3.23-4.27-5.21-6.98-5.96-8.12
		c-1.23-1.87-2.11-3.58-2.66-5.14c-0.55-1.56-0.82-3.14-0.82-4.74c0-2.96,0.99-5.44,2.96-7.44c1.97-2,4.41-3,7.32-3
		c2.93,0,5.48,1.04,7.64,3.12c1.63,1.55,2.95,3.85,3.96,6.92c0.88-3.01,2.12-5.31,3.72-6.88c2.21-2.13,4.77-3.2,7.68-3.2
		c2.88,0,5.32,0.99,7.32,2.98c2,1.99,3,4.36,3,7.1c0,2.4-0.59,4.9-1.76,7.5c-1.18,2.6-3.44,6.01-6.8,10.22
		c-4.37,5.52-7.56,10.06-9.56,13.6C826.91,985.53,825.71,988.46,824.88,991.53z'
            />
          </g>
          <rect
            x='118.2'
            y='858.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 118.1997 872.4434)'
            className='st13 st20'
          >
            78-79
          </text>
          <rect
            x='139.2'
            y='902.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 139.1997 916.4434)'
            className='st13 st20'
          >
            77-78
          </text>
          <rect
            x='158.2'
            y='946.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 158.1997 960.4434)'
            className='st13 st20'
          >
            76-77
          </text>
          <rect
            x='193.2'
            y='1035.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 193.1997 1049.4434)'
            className='st13 st20'
          >
            73-74
          </text>
          <rect
            x='209.2'
            y='1081.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 209.1997 1095.4434)'
            className='st13 st20'
          >
            72-73
          </text>
          <rect
            x='225.2'
            y='1127.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 225.1997 1141.4434)'
            className='st13 st20'
          >
            71-72
          </text>
          <rect
            x='177.2'
            y='991.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 177.1997 1009.0234)'
            className='st17 st21'
          >
            75 {t("age")}
          </text>
          <rect
            x='381.2'
            y='1261.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 381.1997 1275.4434)'
            className='st13 st20'
          >
            68-69
          </text>
          <rect
            x='429.2'
            y='1280.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 429.1997 1294.4434)'
            className='st13 st20'
          >
            67-68
          </text>
          <rect
            x='470.2'
            y='1298.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 470.1997 1312.4434)'
            className='st13 st20'
          >
            66-67
          </text>
          <rect
            x='560.2'
            y='1340.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 560.1997 1354.4434)'
            className='st13 st20'
          >
            63-64
          </text>
          <rect
            x='602.2'
            y='1358.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 602.1997 1372.4434)'
            className='st13 st20'
          >
            62-63
          </text>
          <rect
            x='649.2'
            y='1381.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 649.1997 1395.4434)'
            className='st13 st20'
          >
            61-62
          </text>
          <rect
            x='513.2'
            y='1310.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 513.1997 1328.0234)'
            className='st17 st21'
          >
            65 {t("age")}
          </text>
          <rect
            x='1078.2'
            y='1256.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1078.1997 1270.4434)'
            className='st13 st20'
          >
            51-52
          </text>
          <rect
            x='1030.2'
            y='1275.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1030.1997 1289.4434)'
            className='st13 st20'
          >
            52-53
          </text>
          <rect
            x='985.2'
            y='1296.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 985.1997 1310.4434)'
            className='st13 st20'
          >
            53-54
          </text>
          <rect
            x='889.2'
            y='1340.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 889.1997 1354.4434)'
            className='st13 st20'
          >
            56-57
          </text>
          <rect
            x='848.2'
            y='1358.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 848.1997 1372.4434)'
            className='st13 st20'
          >
            57-58
          </text>
          <rect
            x='797.2'
            y='1377.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 797.1997 1391.4434)'
            className='st13 st20'
          >
            58-59
          </text>
          <rect
            x='914.2'
            y='1310.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 914.1997 1328.0234)'
            className='st17 st21'
          >
            55 {t("age")}
          </text>
          <rect
            x='1322.2'
            y='855.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1322.1997 869.4434)'
            className='st13 st20'
          >
            41-42
          </text>
          <rect
            x='1303.2'
            y='899.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1303.1997 913.4434)'
            className='st13 st20'
          >
            42-43
          </text>
          <rect
            x='1287.2'
            y='943.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1287.1997 957.4434)'
            className='st13 st20'
          >
            43-44
          </text>
          <rect
            x='1252.2'
            y='1034.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1252.1997 1048.4434)'
            className='st13 st20'
          >
            45-46
          </text>
          <rect
            x='1231.2'
            y='1080.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1231.1997 1094.4434)'
            className='st13 st20'
          >
            46-47
          </text>
          <rect
            x='1210.2'
            y='1123.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1210.1997 1137.4434)'
            className='st13 st20'
          >
            47-48
          </text>
          <rect
            x='1243.2'
            y='990.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1243.1997 1008.0234)'
            className='st17 st21'
          >
            45 {t("age")}
          </text>
          <rect
            x='1213.2'
            y='368.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1213.1997 382.4434)'
            className='st13 st20'
          >
            31-32
          </text>
          <rect
            x='1232.2'
            y='411.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1232.1997 425.4434)'
            className='st13 st20'
          >
            32-33
          </text>
          <rect
            x='1248.2'
            y='458.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1248.1997 472.4434)'
            className='st13 st20'
          >
            33-34
          </text>
          <rect
            x='895.2'
            y='158.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 895.1997 172.4434)'
            className='st13 st20'
          >
            23-24
          </text>
          <rect
            x='850.2'
            y='136.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 850.1997 150.4434)'
            className='st13 st20'
          >
            22-23
          </text>
          <rect
            x='806.2'
            y='115.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 806.1997 129.4434)'
            className='st13 st20'
          >
            21-22
          </text>
          <rect
            x='991.2'
            y='195.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 991.1997 209.4434)'
            className='st13 st20'
          >
            25-26
          </text>
          <rect
            x='1031.2'
            y='213.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1031.1997 227.4434)'
            className='st13 st20'
          >
            26-27
          </text>
          <rect
            x='1077.2'
            y='229.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1077.1997 243.4434)'
            className='st13 st20'
          >
            27-28
          </text>
          <rect
            x='1286.2'
            y='546.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1286.1997 560.4434)'
            className='st13 st20'
          >
            35-36
          </text>
          <rect
            x='1307.2'
            y='595.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1307.1997 609.4434)'
            className='st13 st20'
          >
            36-37
          </text>
          <rect
            x='1329.2'
            y='643.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1329.1997 657.4434)'
            className='st13 st20'
          >
            37-38
          </text>
          <rect
            x='1245.2'
            y='499.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 1245.1997 517.0234)'
            className='st17 st21'
          >
            35 {t("age")}
          </text>
          <rect
            x='230.2'
            y='368.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 230.1997 382.4434)'
            className='st13 st20'
          >
            8-9
          </text>
          <rect
            x='212.2'
            y='411.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 212.1997 425.4434)'
            className='st13 st20'
          >
            7-8
          </text>
          <rect
            x='194.2'
            y='458.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 194.1997 472.4434)'
            className='st13 st20'
          >
            6-7
          </text>
          <rect
            x='158.2'
            y='546.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 158.1997 560.4434)'
            className='st13 st20'
          >
            3-4
          </text>
          <rect
            x='137.2'
            y='595.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 137.1997 609.4434)'
            className='st13 st20'
          >
            2-3
          </text>
          <rect
            x='119.2'
            y='636.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 119.1997 650.4434)'
            className='st13 st20'
          >
            1-2
          </text>
          <rect
            x='176.2'
            y='499.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 176.1997 517.0234)'
            className='st17 st21'
          >
            5 {t("age")}
          </text>
          <rect
            x='915.2'
            y='182.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 915.1997 200.0234)'
            className='st17 st21'
          >
            25 {t("age")}
          </text>
          <rect
            x='552.2'
            y='155.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 552.1997 169.4434)'
            className='st13 st20'
          >
            16-17
          </text>
          <rect
            x='601.2'
            y='132.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 601.1997 146.4434)'
            className='st13 st20'
          >
            17-18
          </text>
          <rect
            x='649.2'
            y='112.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 649.1997 126.4434)'
            className='st13 st20'
          >
            18-19
          </text>
          <rect
            x='453.2'
            y='189.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 453.1997 203.4434)'
            className='st13 st20'
          >
            13-14
          </text>
          <rect
            x='408.2'
            y='209.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 408.1997 223.4434)'
            className='st13 st20'
          >
            12-13
          </text>
          <rect
            x='364.2'
            y='229.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 364.1997 243.4434)'
            className='st13 st20'
          >
            11-12
          </text>
          <rect
            x='509.2'
            y='182.12'
            className='st11'
            width='145.58'
            height='21.88'
          />
          <text
            transform='matrix(1 0 0 1 509.1997 200.0234)'
            className='st17 st21'
          >
            15 {t("age")}
          </text>
          <rect
            x='500.76'
            y='902.55'
            className='st11'
            width='500.24'
            height='34.45'
          />
          <text
            x={750.88}
            y={919.775}
            textAnchor='middle'
            dominantBaseline='central'
            className='st17 st22'
          >
            {t("zone")}
          </text>
          <g transform='matrix(0.7071 -0.7071 0.7071 0.7071 -171.2206 798.1824)'>
            <rect
              x={732.85}
              y={588.55}
              width={290.07}
              height={34.45}
              className='st11'
            />
            <text
              x={877.885}
              y={605.775}
              transform='rotate(0 877.885 605.775)'
              textAnchor='middle'
              dominantBaseline='central'
              className='st17 st22'
            >
              {t("female")}
            </text>
          </g>
          <g transform='matrix(0.7071 -0.7071 0.7071 0.7071 -243.716 611.1631)'>
            <rect
              x={598.65}
              y={461.64}
              width={34.45}
              height={276.26}
              className='st11'
            />
            <text
              x={615.875}
              y={599.77}
              transform='rotate(90 615.875 599.77)'
              textAnchor='middle'
              dominantBaseline='central'
              className='st17 st22'
            >
              {t("male")}
            </text>
          </g>
        </svg>
      )}
    </>
  );
};
export default Index;
