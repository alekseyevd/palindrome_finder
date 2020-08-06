class PFinder {

  findAll(str) {

    let s = this.prepare(str)

    if (s.length < 3) return []
    let ar = []

    let longest = s[0]
    for (let i = 0; i < s.length; i++) {
      let tmp = this.helper(s, i, i)
      if (tmp.length > longest.length && tmp.length > 2) {
        if (!ar.includes(tmp)) {
          ar.push(tmp)
        }
      }

      tmp = this.helper(s, i, i+1)
      if (tmp.length > longest.length && tmp.length > 2) {
        if (!ar.includes(tmp)) {
          ar.push(tmp)
        }
      }
    }
    return ar
  }

  findMax(str) {
    let s = this.prepare(str)

    if (s.length < 3) return null

    let longest = s[0]
    for (let i = 0; i < s.length; i++) {
      let tmp = this.helper(s, i, i)
      if (tmp.length > longest.length && tmp.length > 2) {
        longest = tmp
      }

      tmp = this.helper(s, i, i+1)
      if (tmp.length > longest.length && tmp.length > 2) {
        longest = tmp
      }
    }

    return longest.length > 2 ? longest : null
  }

  prepare(str) {
    return str.toLowerCase().replace(/[^a-zA-Zа-яА-Я]/g, '')
  }

  helper(s, begin, end) {
    while (begin >= 0 && end <= (s.length - 1) && s[begin] === s[end]) {
      begin--
      end++
    }
    return s.substr(begin + 1, end - begin - 1)
  }

}

module.exports = PFinder



//let str ="Учитывая ключевые сценарии поведения, высокое качество позиционных исследований выявляет срочную потребность анализа существующих паттернов поведения. Современные технологии достигли такого уровня, что семантический разбор внешних противодействий однозначно определяет каждого участника как способного принимать собственные решения касаемо системы обучения кадров, соответствующей насущным потребностям! Безусловно, социально-экономическое развитие играет определяющее значение для анализа существующих паттернов поведения. Идейные соображения высшего порядка, а также повышение уровня гражданского сознания прекрасно подходит для реализации вывода текущих активов. Повседневная практика показывает, что существующая теория требует от нас анализа первоочередных требований! Как уже неоднократно упомянуто, действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, призваны к ответу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: постоянное информационно-пропагандистское обеспечение нашей деятельности является качественно новой ступенью системы массового участия. Безусловно, консультация с широким активом позволяет выполнить важные задания по разработке новых принципов формирования материально-технической и кадровой базы. Сложно сказать, почему диаграммы связей неоднозначны и будут указаны как претенденты на роль ключевых факторов. Таким образом, сложившаяся структура организации является качественно новой ступенью поэтапного и последовательного развития общества. Имеется спорная точка зрения, гласящая примерно следующее: сделанные на базе интернет-аналитики выводы, инициированные исключительно синтетически, заблокированы в рамках своих собственных рациональных ограничений. Как принято считать, сторонники тоталитаризма в науке в равной степени предоставлены сами себе. В своём стремлении повысить качество жизни, они забывают, что понимание сути ресурсосберегающих технологий требует от нас анализа существующих финансовых и административных условий. В своём стремлении улучшить пользовательский опыт мы упускаем, что диаграммы связей будут объединены в целые кластеры себе подобных. Каждый из нас понимает очевидную вещь: семантический разбор внешних противодействий позволяет выполнить важные задания по разработке анализа существующих паттернов поведения."

