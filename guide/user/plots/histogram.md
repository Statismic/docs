# Histogram

## Example

<ClientOnly>
<histogram/>
</ClientOnly>

```html
<div>
    <statismic-histogram
        label-x="X Label"
        label-y="Y Label"
        :data-x="xdata"
        interval="0.1"
        style="height: 600px;"
    />
    <button @click="xdata.push(Math.random())">Add</button>
</div>
```

```js
export default {
  data() {
    return {
      xdata: [0.9]
    };
  }
};
```

## Attributes

|     Attribute     |                 Description                 | Required | Default |  Type  |
|:------------------|:--------------------------------------------|:--------:|:-------:|:------:|
|      interval     |             each bar's interval             |    yes   |    -    | Number |
|       range       |              min-max of data-x              |    no    |  [0,1]  |  Array |
|     color-bar     |       color for bars in the histogram       |    no    | "green" | String |
| color-highlighter | color for helper lines when you hover bars  |    no    | "black" | String |

::: tip
See also [common attributes](common.md)
:::