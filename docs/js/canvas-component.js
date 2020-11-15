'use strict'




Vue.component('canvas-component', {
  props: ['global', 'self', 'mobs', 'zone'],
  data: function () {
    return {
      image: new Image(),
      scale: 1.0,
      canvas: null,
      display: {
        S: 0,
        A: 0,
        B: 0,
        A2: 0,
        B2: 0,
        SS: 0
      }

    }
  },
  template: `
        
        <div id="canvasWrapper">
        <div id="mobbuttons" v-if="zoneType==0">
        <v-layout row wrap>
        <v-flex xs4>
          <v-btn-toggle class="full2" v-model="display.S">
            <v-btn x-small depressed outlined block tile class="ffcolor-red rounded-0 full2">{{$t(sNameKey)}}</v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs4>
          <v-btn-toggle class="full2" v-model="display.A">
            <v-btn x-small depressed outlined block tile class="ffcolor-yellow rounded-0 full2">{{$t(aNameKey)}}</v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs4>
          <v-btn-toggle class="full2" v-model="display.B">
            <v-btn x-small depressed outlined block tile class="ffcolor-blue rounded-0 full2">{{$t(bNameKey)}}</v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-layout>
    </div>
    <div id="mobbuttons" v-else-if="zoneType==1">
      <v-layout row wrap>
        <v-flex xs4>
          <v-btn-toggle class="full2" v-model="display.S">
            <v-btn x-small depressed outlined block tile class="ffcolor-red rounded-0 full2">{{$t(sNameKey)}}</v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs4>
          <v-btn-toggle class="full3" v-model="display.A">
            <v-btn x-small depressed outlined block tile class="ffcolor-yellow rounded-0">{{$t(aNameKey)}}</v-btn>
          </v-btn-toggle>
          <v-btn-toggle class="full3" v-model="display.A2">
            <v-btn x-small depressed outlined block tile class="ffcolor-green rounded-0">{{$t(a2NameKey)}}</v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs4>
          <v-btn-toggle class="full3" v-model="display.B">
            <v-btn x-small depressed outlined block tile class="ffcolor-blue rounded-0">{{$t(bNameKey)}}</v-btn>
          </v-btn-toggle>
          <v-btn-toggle class="full3" v-model="display.B2">
            <v-btn x-small depressed outlined block tile class="ffcolor-purple rounded-0">{{$t(b2NameKey)}}</v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-layout>
    </div>
    <div id="mobbuttons" v-else-if="zoneType==2">
      <v-layout row wrap>
        <v-flex xs4>
          <v-btn-toggle class="full3" v-model="display.S">
            <v-btn x-small depressed outlined block tile class="ffcolor-red rounded-0">{{$t(sNameKey)}}</v-btn>
          </v-btn-toggle>
          <v-btn-toggle class="full3" v-model="display.SS">
            <v-btn x-small depressed outlined block tile class="ffcolor-grey rounded-0">{{$t(ssNameKey)}}</v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs4>
          <v-btn-toggle class="full3" v-model="display.A">
            <v-btn x-small depressed outlined block tile class="ffcolor-yellow rounded-0">{{$t(aNameKey)}}</v-btn>
          </v-btn-toggle>
          <v-btn-toggle class="full3" v-model="display.A2">
            <v-btn x-small depressed outlined block tile class="ffcolor-green rounded-0">{{$t(a2NameKey)}}</v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs4>
          <v-btn-toggle class="full3" v-model="display.B">
            <v-btn x-small depressed outlined block tile class="ffcolor-blue rounded-0">{{$t(bNameKey)}}</v-btn>
          </v-btn-toggle>
          <v-btn-toggle class="full3" v-model="display.B2">
            <v-btn x-small depressed outlined block tile class="ffcolor-purple rounded-0">{{$t(b2NameKey)}}</v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-layout>

      </div>

              <canvas id="canvas" v-show="zone != null"></canvas>
        </div>
    `,
  mounted: function () {
    document.addEventListener("wheel", e => {
      if (e.deltaY < 0) { //e.deltaY == -100
        const newScale = this.scale * 1.1;
        this.scale = Math.min(newScale, 8.0);
      }
      else if (e.deltaY > 0) { //e.deltaY == 100
        const newScale = this.scale / 1.20;
        this.scale = Math.max(newScale, 1.0);
      }
      localStorage.setItem('scale', this.scale);
    });
    this.canvas = document.getElementById('canvas');
  },
  methods: {
    draw() {
      this.canvas.width = document.querySelector("#canvasWrapper").offsetWidth;
      this.canvas.height = this.canvas.width;
      if (this.zone == null) {
          if (this.canvas.getContext) {
            const ctx = this.canvas.getContext('2d');
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
          }
        return
      }
      // scaleが1.0の時はマップ全体を描画する
      // scaleが5.0とかだと大きくなって、自分が中心になる
      if (this.image.src != `https://xivapi.com/${this.zone.url}`) {
        this.image.src = `https://xivapi.com/${this.zone.url}`
      }

      if (this.canvas.getContext) {
        const ctx = this.canvas.getContext('2d');

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.save();
        if (this.image.width > 0) {
          // Canvas Size -> Area Size
          const scalec2a = this.canvas.width / (this.zone.scale.xmax - this.zone.scale.xmin)
          const scalea2i = (this.zone.scale.xmax - this.zone.scale.xmin) / this.image.width;
          ctx.scale(scalec2a, scalec2a)

          //mid
          const width = (this.zone.scale.xmax - this.zone.scale.xmin)
          const height = (this.zone.scale.ymax - this.zone.scale.ymin)
          const midX = width / 2.0
          const midY = height / 2.0

          ctx.scale(this.scale, this.scale)
          //ctx.translate(-midX, -midY)
          ctx.translate(1.0 - this.self.x, 1.0 - this.self.y)
          const prefferedX = midX / this.scale
          const prefferedY = midY / this.scale
          const offsetLeft = (-this.zone.scale.xmin + this.self.x)
          const offsetRight = width / this.scale - (this.zone.scale.xmax - this.self.x)
          const offsetTop = (-this.zone.scale.ymin + this.self.y)
          const offsetBottom = height / this.scale - (this.zone.scale.ymax - this.self.y)

          this.a = prefferedX
          this.b = prefferedY
          this.c = offsetLeft
          this.d = offsetRight
          this.e = offsetTop
          this.f = offsetBottom

          ctx.translate(prefferedX < offsetLeft ? Math.max(prefferedX, offsetRight) : offsetLeft,
            prefferedY < offsetTop ? Math.max(prefferedY, offsetBottom) : offsetTop)

          ctx.save()
          ctx.scale(scalea2i, scalea2i)
          ctx.drawImage(this.image, 0, 0)
          ctx.restore()
          ctx.translate(-this.zone.scale.xmin, -this.zone.scale.ymin)

          //索敵範囲
          ctx.fillStyle = "rgba(0, 0, 255, 0.25)";
          ctx.fillRect(this.self.x - 2.2, this.self.y - 2.2, 4.4, 4.4);

          this.drawMobPos(ctx, scalec2a)
          this.drawRebellion(ctx, scalec2a)


          this.mobs.forEach(m => {
            ctx.save()
            if (this.zone.mobs.find(item => { return item.id == m.id }) != null || 
                (this.zone.type == 2 && this.zone.mobs2.find(item => { return item.id == m.id }) != null)) {
              ctx.fillStyle = "rgba(0, 0, 255, 1.0)";
              ctx.beginPath()
              ctx.translate(m.x, m.y)
              ctx.arc(0, 0, 2/scalec2a, 0, Math.PI * 2, 0);
              ctx.fill();
              ctx.closePath();
            }
            else {
              ctx.fillStyle = "rgba(255, 0, 0, 1.0)";
              if (this.scale > 2.0) {
                ctx.beginPath()
                ctx.translate(m.x, m.y)
                ctx.arc(0, 0, 2/3/scalec2a, 0, Math.PI * 2, 0);
                ctx.fill();
                ctx.closePath();
              }
            }
            ctx.restore()
          })

          ctx.save()
          ctx.translate(this.self.x, this.self.y)
          ctx.rotate(Math.PI-this.self.heading)

          ctx.beginPath();
          ctx.fillStyle = "rgba(192, 255, 192, 0.3)";
          ctx.arc(0, 0, 15/scalec2a, Math.PI + 0.8, -0.8)
          ctx.lineTo(0, 0);
          ctx.fill();
          ctx.closePath();

          ctx.beginPath()
          ctx.fillStyle = "rgba(150, 150, 255, 1.0)";
          ctx.strokeStyle = `#000000ff`;
          ctx.lineWidth = 0.5/(this.scale*scalec2a)
          ctx.arc(0, 0, 8/(this.scale*scalec2a), 0, Math.PI, 0)
          ctx.lineTo(0, -15/(this.scale*scalec2a))
          ctx.lineTo(8/(this.scale*scalec2a), 0)
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
          ctx.beginPath()
          ctx.arc(0, 0, 2/(this.scale*scalec2a), 0, 2*Math.PI, 0)
          ctx.stroke();
          ctx.closePath();
          ctx.restore()

          ctx.restore();
        }
        ctx.restore();

        this.drawCopyRight(ctx)
      }
    },

    drawMobPos(ctx, scale) {
      this.zone.mobLocations.forEach(loc => {
        ctx.save();
        ctx.translate(loc.x, loc.y);
        const radius = 0.5
        const arcs = [];
        const opacity = this.scale > 2.0 ? '77' : 'ff'
        if (this.zone.type === 0) {
          if (loc.flags[0] && this.display.S != undefined) { arcs.push({ fillStyle: `#f44336${opacity}` }); }
          if (loc.flags[1] && this.display.A != undefined) { arcs.push({ fillStyle: `#ffeb3b${opacity}` }); }
          if (loc.flags[2] && this.display.B != undefined) { arcs.push({ fillStyle: `#2196f3${opacity}` }); }
        }
        else { //type === 1
          if (loc.flags[0] && this.display.S != undefined) { arcs.push({ fillStyle: `#f44336${opacity}` }); }
          if (loc.flags[1] && this.display.A != undefined) { arcs.push({ fillStyle: `#ffeb3b${opacity}` }); }
          if (loc.flags[2] && this.display.A2 != undefined) { arcs.push({ fillStyle: `#8bc34a${opacity}` }); }
          if (loc.flags[3] && this.display.B != undefined) { arcs.push({ fillStyle: `#2196f3${opacity}` }); }
          if (loc.flags[4] && this.display.B2 != undefined) { arcs.push({ fillStyle: `#9c27b0${opacity}` }); }
        }
        switch (arcs.length) {
          case 1:
            arcs[0].radStart = 0.0;
            arcs[0].radEnd = 2 * Math.PI;
            break;
          case 2:
            arcs[0].radStart = Math.PI;
            arcs[0].radEnd = 2 * Math.PI;
            arcs[1].radStart = 0.0;
            arcs[1].radEnd = Math.PI;
            break;
          case 3:
            arcs[0].radStart = Math.PI / 6.0 * 7.0;
            arcs[0].radEnd = Math.PI / 6.0 * 11.0;
            arcs[1].radStart = Math.PI / 6.0 * 3.0;
            arcs[1].radEnd = Math.PI / 6.0 * 7.0;
            arcs[2].radStart = Math.PI / 6.0 * 11.0;
            arcs[2].radEnd = Math.PI / 6.0 * 3.0;
            break;
          case 4:
            arcs[0].radStart = Math.PI / 4.0 * 5.0;
            arcs[0].radEnd = Math.PI / 4.0 * 7.0;
            arcs[1].radStart = Math.PI / 4.0 * 3.0;
            arcs[1].radEnd = Math.PI / 4.0 * 5.0;
            arcs[2].radStart = Math.PI / 4.0 * 7.0;
            arcs[2].radEnd = Math.PI / 4.0 * 1.0;
            arcs[3].radStart = Math.PI / 4.0 * 1.0;
            arcs[3].radEnd = Math.PI / 4.0 * 3.0;
            break;
          case 5:
            arcs[0].radStart = (Math.PI / 2) + (Math.PI * 2 / 5) * 2.0;
            arcs[0].radEnd = (Math.PI / 2) + (Math.PI * 2 / 5) * 3.0;
            arcs[1].radStart = (Math.PI / 2) + (Math.PI * 2 / 5) * 1.0;
            arcs[1].radEnd = (Math.PI / 2) + (Math.PI * 2 / 5) * 2.0;
            arcs[2].radStart = (Math.PI / 2) + (Math.PI * 2 / 5) * 3.0;
            arcs[2].radEnd = (Math.PI / 2) + (Math.PI * 2 / 5) * 4.0;
            arcs[3].radStart = (Math.PI / 2) + (Math.PI * 2 / 5) * 0.0;
            arcs[3].radEnd = (Math.PI / 2) + (Math.PI * 2 / 5) * 1.0;
            arcs[4].radStart = (Math.PI / 2) + (Math.PI * 2 / 5) * 4.0;
            arcs[4].radEnd = (Math.PI / 2) + (Math.PI * 2 / 5) * 0.0;
            break;
        }
        ctx.strokeStyle = `#000000${opacity}`;
        ctx.lineWidth = 0.02
        arcs.forEach(function (v) {
          ctx.beginPath();
          if (arcs.length != 1) {
            ctx.moveTo(0, 0);
          }
          ctx.fillStyle = v.fillStyle
          ctx.arc(0, 0, radius, v.radStart, v.radEnd, false);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        })

        if (true && arcs.length > 0 && this.scale > 2.0) {
          ctx.save()
          ctx.translate(0.0, 0.5)
          ctx.fillStyle = '#000000ff';
          let text = `(${Math.round(10*loc.x)/10}, ${Math.round(10*loc.y)/10})`
          ctx.font = '12px sans-serif';
          ctx.scale(1/(this.scale*scale), 1/(this.scale*scale))
          ctx.textAlign = 'center';
          ctx.fillText(text, 0, 13);
          ctx.restore()
        }

        ctx.restore();
      })
    },

    drawRebellion(ctx, scale) {
      if (this.zone.mobLocations2) {
        const opacity = this.scale > 2.0 ? '77' : 'ff'
        this.zone.mobLocations2.forEach(loc => {
          ctx.save();
          ctx.translate(loc.x, loc.y);
          ctx.strokeStyle = `#000000${opacity}`
          ctx.lineWidth = 0.02
          ctx.fillStyle = `#607d8b${opacity}`
          if (loc.flags[0] && this.display.SS != undefined) {
            this.drawStar(ctx, 0, 0, 6, 0.5, 0.28);
          }
          else if (loc.flags[1] && this.display.SS != undefined) {
            ctx.beginPath();
            ctx.moveTo(-0.5, 0);
            ctx.lineTo(0, 0.5);
            ctx.lineTo(0.5, 0);
            ctx.lineTo(0, -0.5);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }

          if (true && this.scale > 2.0) {
            ctx.save()
            ctx.translate(0.0, 0.5)
            ctx.fillStyle = "#000000ff";
            let text = `(${Math.round(10*loc.x)/10}, ${Math.round(10*loc.y)/10})`
            ctx.font = '12px sans-serif';
            ctx.scale(1/(this.scale*scale), 1/(this.scale*scale))
            ctx.textAlign = 'center';
            ctx.fillText(text, 0, 13);
            ctx.restore()
          }
  
          ctx.restore();
        })
      }
    },

    drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
      var rot = Math.PI / 2 * 3;
      var x = cx;
      var y = cy;
      var step = Math.PI / spikes;

      ctx.beginPath();
      ctx.lineWidth = 0.02;
      ctx.moveTo(cx, cy - outerRadius)
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    },

    drawCopyRight(ctx) {
      ctx.save()
      ctx.translate(this.canvas.width / 2, 0)
      ctx.fillStyle = "#000000ff";
      const copyright = 'Copyright (C) 2010 - 2020 SQUARE ENIX CO., LTD. All Rights Reserved.'
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(copyright, 0, this.canvas.height - 12);
      ctx.restore()
    }

  },
  computed: {
    zoneType() {
      return this.zone ? this.zone.type : -1
    },
    sNameKey() {
      return this.zone ? `mob.${this.zone.mobs[0].id}` : 's'
    },
    aNameKey() {
      return this.zone ? `mob.${this.zone.mobs[1].id}` : 'a'
    },
    a2NameKey() {
      return this.zone ? (this.zone.type == 0 ? 'a2' : `mob.${this.zone.mobs[2].id}`) : 'a2'
    },
    bNameKey() {
      return this.zone ? (this.zone.type == 0 ? `mob.${this.zone.mobs[2].id}` : `mob.${this.zone.mobs[3].id}`) : 'b'
    },
    b2NameKey() {
      return this.zone ? (this.zone.type == 0 ? 'b2' : `mob.${this.zone.mobs[4].id}`) : 'b2'
    },
    ssNameKey() {
      return this.zone ? (this.zone.type != 2 ? 'ss' : `mob.${this.zone.mobs2[0].id}`) : 'ss'
    },
  },
  watch: {
    display: {
      handler: function () {
        // refresh canvas
        this.draw()
      },
      deep: true
    }
  }

})
