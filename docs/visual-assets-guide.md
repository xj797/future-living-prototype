# Future Living Prototype — 视觉资产指南

## 世界观统一原则

所有场景图必须属于**同一个家**，保持：
- 同样的暖光语言
- 同样的生活痕迹感
- 同样的情绪基调
- 同样的建筑美学
- 同样的电影节奏

---

## 现有资产（无需变动）

| 场景 | 文件名 | 来源 |
|------|--------|------|
| Opening（房子外景） | `public/images/opening-house.png` | 已生成 |
| Living Room（客厅） | `public/images/living-room.png` | 已生成（scene1） |
| Upstairs（二楼） | `public/images/upstairs.png` | 已生成（scene2） |
| Study（书房） | `public/images/study.png` | 已生成（温馨的书房） |
| Floor Plan（平面图） | `public/images/floor-plan.png` | 已有 |

---

## 待生成资产

### 1. Tea Corner（茶角）

**保存为**: `public/images/tea-corner.png`

Prompt:

```
Create a cinematic concept scene for the Tea Corner inside the future home.

The tea corner is NOT a separate room.
It is a quiet extension of the living room near the floor-to-ceiling window.

Atmosphere:
- warm morning sunlight
- calm and restorative
- lived-in
- soft shadows
- quiet breathing atmosphere

Spatial feeling:
- positioned near the large courtyard window
- connected visually to the living room
- feels like a slow-living corner inside the home

Elements:
- low wooden tea table
- warm ceramic tea set
- floor cushions or soft lounge seating
- natural wood textures
- soft cream-white walls
- indoor plants
- subtle morning light drifting across the floor
- visible connection to the courtyard outside

Style:
- cinematic architectural visualization
- warm cream-white and wood palette
- emotionally restorative
- minimal but lived-in
- no luxury showroom feeling
- no Japanese zen minimalism cliché
- feels like someone has lived here for years

Camera:
- slightly low angle
- intimate composition
- gentle depth
- architectural film feeling

Important:
This should feel like a place where someone slowly drinks tea after working, reading, or spending time with pets.
```

---

### 2. Courtyard（庭院）

**保存为**: `public/images/courtyard.png`

Prompt:

```
Create a cinematic courtyard concept scene for the future home.

The courtyard is NOT decorative landscaping.
It acts as the home's second living room and natural breathing space.

Atmosphere:
- warm morning or golden-hour light
- emotionally calm
- soft wind movement
- quiet urban sanctuary

Spatial feeling:
- directly connected to the living room through large floor-to-ceiling glass
- feels like indoor and outdoor life are blended together
- designed for long-term living, not visual perfection

Elements:
- natural greenery
- warm stone paths
- wood deck area
- outdoor seating
- subtle lived-in traces
- tea cups, blanket, soft outdoor lighting
- large glass wall connecting to the living room
- soft shadows from trees
- possibility of pets relaxing in the yard

Style:
- cinematic architectural atmosphere
- warm cream-white + natural wood palette
- emotionally restorative
- modern but deeply human
- not luxury villa aesthetic
- not resort feeling
- not over-designed

Camera:
- medium-wide cinematic framing
- immersive environmental composition
- architectural film mood

Important:
This courtyard should feel like an extension of daily life —
a place where people read, work, rest, drink tea, and spend time quietly over many years.
```

---

## 替换指引

生成图片后：

1. 将 `tea-corner.png` 放入 `public/images/`
2. 将 `courtyard.png` 放入 `public/images/`
3. 通知 Claude Code 更新组件中的图片引用
