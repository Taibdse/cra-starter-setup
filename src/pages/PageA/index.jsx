import PageContainer from "components/PageContainer";
import { useCounterStore } from "store/counter";
import { Button } from 'primereact/button';

export default function PageA() {
  const count = useCounterStore((state) => state.count);
  const setCount = useCounterStore((state) => state.setCount);

  const handleIncreaseCount = () => {
    setCount(count + 1);
  }

  const handleDecreaseCount = () => {
    setCount(count - 1);
  }

  return (
    <PageContainer title="Page A">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ducimus ipsam cupiditate facilis doloribus! Sunt cum odio
        distinctio libero optio quia illo assumenda beatae eum,
        voluptas, deserunt quis quos fugit sapiente.</div>

      <h2>Counter: {count}</h2>
      <Button label="Increase" onClick={handleIncreaseCount} className="mr-2" />
      <Button label="Decrease" onClick={handleDecreaseCount} />
    </PageContainer>
  )
}
