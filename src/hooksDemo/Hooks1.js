import React, { Fragment, useEffect, useState } from "react";

function Hooks1() {
  // count 是不允许直接修改的，
  // 只能通过 setCount 修改
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState({
    name: "minu",
    age: 23,
  });

  function add() {
    setCount(count + 1);
  }
  const onSetPerson = () => {
    //  setPerson 原有的属性不会变
    // 只传name，age默认为空
    // 两个都不传，默认为空
    // 传新的属性 gender，不会新增
    setPerson({
      ...person,
      name: "jack",
      gender: "man",
    });
  };

  // 会触发UI更新
  // 第一个参数是一个函数 （我们称之为 effect）
  // 他告诉React在组件渲染后（包括第一次和更新）做什么操作，
  // 它是一个函数，方便复用（第一次渲染调用，每次更新后再调用）

  // useEffect 默认在 第一次 和 更新后 (反正就是每次渲染后) 都会执行
  //   只考虑 渲染后,不用再去考虑"挂载" 还是 "更新"
  // 第二个参数：控制 更新后的执行, 数组, 表示监听数组内元素的更新
  // [] 空数组, 表示 不监控任何值, 不依赖于props和state中的任何值, 只在第一次渲染的时候执行

  // effect 的深入
  // 每次的 effect 实际上都是一个 唯一的effect,
  // 前面的每次 effect都会去取 count的 最新值,生成新的effect,替换旧的effect

  // useEffect 通过 return一个 函数, 模拟componentWillUnmount
  // 这时 effect 可选的 清除机制, 可以将添加和移除订阅的逻辑写在一起

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // 前面的在DOM更新之后，改变文档标题，在类组件中，我们会这么写：
  // 我们希望在 加载 和 更新 的时候触发，两个生命周期写了重复的代码
  // 使用 useEffect 既可以解决
  // componentDidMount() {
  //     document.title = `You clicked ${count} times`
  // }
  // componentDidUpdate() {
  //     document.title = `You clicked ${count} times`
  // }

  return (
    <Fragment>
      <div>{count}</div>
      <button onClick={add}>setCount</button>
      <div>
        name: {person.name}, age: {person.age}
      </div>
      <button onClick={onSetPerson}>setPerson</button>
    </Fragment>
  );
}

export default Hooks1;
