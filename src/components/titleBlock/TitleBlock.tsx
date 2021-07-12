import './TitleBlock.scss'

interface Props {
  subtitle: string;
  title: string;
}

const TitleBlock = ({ title, subtitle }: Props) => {
  return (
    <div className="titleblock">
      <h4 className="titleblock__subheading">{ subtitle }</h4>
      <h3 className="titleblock__heading">{ title }</h3>
    </div>
  );
};

export default TitleBlock;
